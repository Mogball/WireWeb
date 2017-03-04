<?php
/******************************************************
 * HANDLE REGISTER REQUESTS FROM THE CLIENT
 *
 * -- Password and Confirmed Password must be equal
 * -- Email must be syntactically valid
 *      -- confirmation email will be sent
 *
 * -- Password must adhere to the minimum condition
 *      -- Contain at least 8 characters
 *      -- Have a letter
 *      -- Have a number
 *
 * Response codes
 *  Error
 *      WR1001: Passwords do not match
 *      WR1002: Empty field
 *          -1 Email
 *          -2 Password
 *          -3 Confirm password
 *      WR1003: Password does not meet minimum conditions
 *          -1 Less than 8 characters
 *          -2 No letters
 *          -3 No numbers
 *      WR1004: Email is not syntactically correct
 *      WR1006: Email already used
 *      WR1010: <Generic> Failed to register user
 *      DB3000: Connection to user database failed
 *      WS3000: Communication with webserver failed
 *          -- Will never occur server-side
 *  Success
 *      WR1000: Registration successful
 ******************************************************/
function isValidPassword($password, &$error)
{
    if (strlen($password) < 8) {
        $error .= ':1';
    }
    if (!preg_match('#[a-zA-Z]+#', $password)) {
        $error .= ':2';
    }
    if (!preg_match('#[0-9]+#', $password)) {
        $error .= ':3';
    }
    return !strlen($error);
}

function isValidEmail($email)
{
    $filter_result = filter_var($email, FILTER_VALIDATE_EMAIL);
    return !is_bool($filter_result);
}

function get_connectionToDB()
{
    $config = parse_ini_file("../php/config.ini", true);
    $userDB = $config['database_user'];
    $connection = new mysqli(
        $userDB['servername'],
        $userDB['username'],
        $userDB['password'],
        $userDB['databasename'],
        $userDB['databaseport']
    );
    if ($connection->connect_error || $connection->connect_errno) {
        echo "DB3000";
        die();
    }
    return $connection;
}

function get_firebaseDB()
{
    require '../vendor/autoload.php';

    $firebase = Firebase::fromServiceAccount(
        '../php/vire-e9eb3-firebase-adminsdk-u209d-1d4e8c38ae.json',
        'https://vire-e9eb3.firebaseio.com'
    );
    $database = $firebase->getDatabase();
    return $database;
}

function get_uniqueUserID($length = 12)
{
    $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $poolSize = strlen($pool);
    $uid = "";
    for ($i = 0; $i < $length; $i++) {
        $uid .= $pool[rand(0, $poolSize - 1)];
    }
    return $uid;
}

function isExistUID($uid, $connection)
{
    $query = sprintf("SELECT * FROM `_vire.users` WHERE uid='%s'", $uid);
    $result = mysqli_query($connection, $query);
    return mysqli_num_rows($result);
}

function perform_addUser($email, $password)
{
    $connection = get_connectionToDB();
    $query = sprintf("SELECT * FROM `_vire.users` WHERE email_address='%s'",
        mysqli_real_escape_string($connection, $email));
    $result = mysqli_query($connection, $query);
    if (mysqli_num_rows($result)) {
        echo "WR1006";
        die();
    }
    do {
        $uid = get_uniqueUserID();
    } while (isExistUID($uid, $connection));
    $query = sprintf("INSERT INTO `_vire.users`
                      (uid, email_address, password) VALUES
                      ('%s', '%s', '%s')",
        $uid,
        mysqli_real_escape_string($connection, $email),
        mysqli_real_escape_string($connection, $password));
    $result = mysqli_query($connection, $query);
    if ($result) {
        echo "WR1000:email=" . $email;
    } else {
        echo "WR1010";
    }
    $connection->close();
}

function perform_addUser_FBDB($email, $password)
{
    $database = get_firebaseDB();
    $users = $database->getReference('/users')->getSnapshot()->getValue();
    if ($users) {
        // TODO replace with binary search
        foreach ($users as &$user) {
            if (array_key_exists('email_address', $user) && $user['email_address'] == $email) {
                echo "WR1006";
                die();
            }
        }
    }
    do {
        $uid = get_uniqueUserID();
    } while ($database->getReference('/users/' . $uid)->getSnapshot()->getValue());
    $database->getReference('/users/' . $uid)->set([
        'email_address' => $email,
        'password' => $password,
        'funds' => 0,
        'points' => 0
    ]);
    echo "WR1000:email=" . $email;
}

$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];

$error = "";
if (!strlen($email)) {
    $error .= ':1';
}
if (!strlen($password)) {
    $error .= ':2';
}
if (!strlen($confirm_password)) {
    $error .= ':3';
}
if (strlen($error)) {
    echo "WR1002" . $error;
    die();
}

$error = "";
if ($password != $confirm_password) {
    echo "WR1001";
} elseif (!isValidPassword($password, $error)) {
    echo "WR1003" . $error;
} elseif (!isValidEmail($email)) {
    echo "WR1004";
} else {
    unset($error);
    perform_addUser_FBDB($email, $password);
}
