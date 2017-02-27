<?php
require '../vendor/autoload.php';

$firebase = Firebase::fromServiceAccount(
    '../php/vire-e9eb3-firebase-adminsdk-u209d-1d4e8c38ae.json',
    'https://vire-e9eb3.firebaseio.com'
);
$database = $firebase->getDatabase();


$snapshot = $database->getReference('/users')->orderByChild('email_address')->equalTo('jeffniu22@gmail.com')->getSnapshot()->getValue();
var_dump($snapshot);