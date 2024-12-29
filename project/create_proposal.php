<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$servername = "localhost";
$username = "hybrid_160822004";
$password = "ubaya";
$dbname = "hybrid_160822004";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

extract($_POST);

$sql = "select * from join_proposal where idmember = ? and idteam = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $idmember, $idteam);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(array('result' => 'error', 'message' => 'Kamu sudah pernah mendaftar di tim ini sebelumnya! Silahkan pilih tim lain'));
    die();
}


$stmt = $conn->prepare(
    "INSERT INTO join_proposal (idmember, idteam, description) VALUES (?, ?, ?)"
);

$stmt->bind_param("sss", $idmember, $idteam, $description);
if ($stmt->execute()) {
    $arr = ["result" => "success"];
} else {
    $arr = ["result" => "error", "message" => "Gagal simpan data"];
}
echo json_encode($arr);
$stmt->close();
$conn->close();
