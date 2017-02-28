<?php
/******************************************************
 * HANDLE LOGIN REQUESTS FROM THE CLIENT
 *
 * Check if an entered email or phone number exists in
 * the database, then ensure the correct password.
 *
 * Response codes
 *  Error
 *      WL1001: Incorrect email/phone or password
 *      WL1010: <Generic> Failed to login user
 *      DB3000: Connection to user database failed
 *      WS3000: Communication with webserver failed
 *          -- Will never occur server-side
 *  Success
 *      WL1000: Login successful
 ******************************************************/
function encode($source, $indices)
{
    $result = "";
    foreach ($indices as &$index) {
        if (array_key_exists($index, $source)) {
            if (is_array($source[$index])) {
                $result .= encode_all($source[$index], $index);
            } else {
                $result .= $index . '=' . $source[$index] . '&';
            }
        }
    }
    unset($index);
    rtrim($result, '&');
    return $result;
}

function encode_all($source, $prefix)
{
    $result = "";
    foreach ($source as $key => $value) {
        $result .= $prefix . '_' . $key . '=' . $value . '&';
    }
    return $result;
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


$emailphone = $_POST['emailphone'];
$password = $_POST['password'];

$database = get_firebaseDB();
if (strpos($emailphone, '@') !== false) {
    // Email
    $param = 'email_address';
} else {
    // Phone
    $param = 'phone_number';
}
$results = $database->getReference('/users')->getSnapshot()->getValue();
$user = false;
foreach ($results as $result) {
    if (array_key_exists($param, $result) && $result[$param] == $emailphone) {
        $user = $result;
        break;
    }
}
if ($user === false) {
    echo "WL1001";
    die();
}
if ($user['password'] == $password) {
    echo "WL1000:" . encode($user, array(
            'email_address', 'phone_number', 'first_name', 'last_name',
            'country', 'state', 'city', 'funds', 'points', 'birthdate'));
} else {
    echo "WL1001";
}

/*
// Obtain configs
$config = parse_ini_file("../php/config.ini", true);
$userDB = $config['database_user'];
// Connect to user database
$link = new mysqli(
    $userDB['servername'],
    $userDB['username'],
    $userDB['password'],
    $userDB['databasename'],
    $userDB['databaseport']
);
// Return DB3000 if database connection failed
if ($link->connect_errno || $link->connect_error) {
    echo "DB3000";
    die();
}
// Sanitize data
$emailphone = mysqli_real_escape_string($link, $emailphone);
$password = mysqli_real_escape_string($link, $password);
// Setup query: test email then phone
$queryEmail = sprintf("SELECT * FROM `_vire.users` WHERE email_address='%s'", $emailphone);
$queryPhone = sprintf("SELECT * FROM `_vire.users` WHERE phone_number='%s'", $emailphone);
// Send queries
$resultEmail = mysqli_query($link, $queryEmail);
$resultPhone = mysqli_query($link, $queryEmail);
// Results should be ($phone, $email) = {(0, 0), (0, 1), (1, 0)}
$valEmail = mysqli_num_rows($resultEmail);
$valPhone = mysqli_num_rows($resultPhone);
if ($valEmail || $valPhone) {
    $user = $valEmail ? $resultEmail : $resultPhone;
    $user = mysqli_fetch_array($user);
    if ($password == $user['password']) {

        echo "WL1000-" . encode($user, array(
            'email_address', 'phone_number', 'name_first', 'name_last',
            'location_country', 'location_state', 'location_city',
            'birthdate_year', 'birthdate_month', 'birthdate_day',
            'balance_funds', 'balance_points'));
    } else {
        echo "WL1001";
    }
} else {
    // Email or phone not found, send WL1001
    echo "WL1001";
}
*/