<?php
session_start();
include 'conexao.php';  // Inclui o arquivo de conexão com o banco

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $senha = $_POST['password'];

    // Protege contra SQL Injection
    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 1) {
        $usuario = $result->fetch_assoc();
        
        // Verifica a senha (usando password_verify para comparar)
        if (password_verify($senha, $usuario['senha'])) {
            $_SESSION['usuario_id'] = $usuario['id'];  // Salva o ID do usuário na sessão
            header('Location: painel.php');  // Redireciona para o painel do usuário (por exemplo)
            exit();
        } else {
            echo "Senha incorreta.";
        }
    } else {
        echo "Usuário não encontrado.";
    }
}
?>