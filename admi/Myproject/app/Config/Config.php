<?php
/**
 * Author: MAIRA MEDINA
 * Update Date:
 * Descriptions:
 * 
 */
$host = "localhost";
$user = "root";
$password = "";
$myDB = "apiSENA";
$data = array();
$mysqli = new mysqli($host, $user, $password, $myDB);

if ($mysqli->connect_error) {
  echo ("Faild to connect " . $mysqli->connect_error);
} else {
  //echo("Connect OK");
}

