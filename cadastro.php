<?php
session_start();
include 'conexao.php';  // Inclui o arquivo de conexão com o banco

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $senha = $_POST['password'];
    $confirmar_senha = $_POST['confirm_password'];
    $codigo = $_POST['codigo'];

    // Verifica se as senhas coincidem
    if ($senha !== $confirmar_senha) {
        echo "As senhas não coincidem.";
        exit();
    }

    // Verifica se o email já existe no banco de dados
    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "Este e-mail já está registrado.";
        exit();
    }

    // Criptografa a senha
    $senha_segura = password_hash($senha, PASSWORD_DEFAULT);

    // Insere o novo usuário no banco de dados
    $stmt = $conn->prepare("INSERT INTO usuarios (email, senha) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $senha_segura);
    $stmt->execute();

    echo "Cadastro realizado com sucesso! Você pode fazer login agora.";
    // Redireciona para a página de login ou painel (se quiser)
    // header('Location: login.php');
}
?>