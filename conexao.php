<?php
$host = 'localhost';     // Endereço do servidor MySQL
$usuario = 'root';       // Seu usuário MySQL
$senha = '';             // Sua senha do MySQL
$banco = 'exuberante_estetica';     // Nome do banco de dados

$conn = new mysqli($host, $usuario, $senha, $banco);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);  // Exibe o erro exato
} else {
    echo "Conexão bem-sucedida!";
}
?>