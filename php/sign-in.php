<?php
    session_start();

    $login = trim($_POST['login']);
    $password = trim($_POST['password']);
    $passwordHash = md5($password);
    $answer = false;

    $connection = mysqli_connect("ieugene.mysql.tools", "ieugene_admin", "23042000Eugennyy_Admin", "ieugene_yaroki");

    mysqli_set_charset($connection, "UTF8");

    if (!$connection) {
        echo "Виникла помилка під час встановлення з'єднання з базою даних. Будь-ласка, перезавантажте сторінку.";
        exit;
    };

    $dbData = mysqli_query($connection, "SELECT * FROM `Korystuvachi` WHERE `login` = '$login' AND `parol` = '$passwordHash'");

    if (mysqli_num_rows($dbData) >= 1) {
        $_SESSION['login'] = $login;
        $_SESSION['password'] = $passwordHash;

        $answer = true;

        echo $answer;
        exit;
    }

    else {
        echo $answer;
        exit;
    };

    mysqli_close($connection);
?>