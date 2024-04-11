<?php
/**
 * Author: MAIRA MEDINA
 * Update Date:
 * Descriptions:
 * 
 */
include_once('../Config/Config.php');
$query = "SELECT * FROM `user_status` WHERE 1; ";


$result = $mysqli->query($query);

while ($row = $result->fetch_assoc()) {
  $data[] = $row;
}
$result->free_result();
$mysqli->close();

echo json_encode($data);