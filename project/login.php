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

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

if ($username == '' ||  $password == '') {
    echo json_encode(array('result' => 'ERROR', 'message' => 'Username or Password is empty'));
    die();
}

$password_hashed = md5($password);

$sql = "SELECT * FROM member
where username = ? and password = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $username, $password_hashed);

$stmt->execute();
$result = $stmt->get_result();
$array = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $array[] = $row;
    }
    echo json_encode(array('result' => 'OK', 'data' => $array, 'message' => 'Anda berhasil login'));
} else {
    echo json_encode(array('result' => 'ERROR', 'message' => 'Username atau Password salah. Silahkan coba lagi'));
    die();
}
