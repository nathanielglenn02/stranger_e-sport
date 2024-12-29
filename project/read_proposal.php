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

$idmember = $_GET['idmember'] ?? '';

if ($idmember) {
    $sql = "SELECT  team.name as teamName, game.name as gameName, join_proposal.status as joinStatus
FROM join_proposal
inner join member on member.idmember = join_proposal.idmember
inner join team on team.idteam = join_proposal.idteam
inner join game on game.idgame = team.idgame
where join_proposal.idmember = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $idmember);
} else {
    $sql = "SELECT  game.name as gameName, join_proposal.status as joinStatus
FROM join_proposal
inner join member on member.idmember = join_proposal.idmember
inner join team on team.idteam = join_proposal.idteam
inner join game on game.idgame = team.idgame";
    $stmt = $conn->prepare($sql);
}

$stmt->execute();
$result = $stmt->get_result();

$data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
echo json_encode($data);
$conn->close();
