<?php
    $connection = mysqli_connect("ieugene.mysql.tools", "ieugene_admin", "23042000Eugennyy_Admin", "ieugene_yaroki");
    $answer = false;

    mysqli_set_charset($connection, "UTF8");
 
    if (!$connection) {
        echo "Виникла помилка під час встановлення з'єднання з базою даних. Будь-ласка, перезавантажте сторінку.";
        exit;
    };
    
    if (isset($_POST['email']) && isset($_POST['login']) && isset($_POST['password'])) {
        $email = trim($_POST['email']);
        $login = trim($_POST['login']);
        $password = trim($_POST['password']);
        $passwordHash = md5($password);

        $query = mysqli_query($connection, "INSERT INTO `Korystuvachi` SET `id` = not null, `poshta` = '$email', `login` = '$login', `parol` = '$passwordHash'");

        if ($query) {
            $answer = true;
            echo $answer;

            exit;
        }

        else {
            echo $answer;
            exit;
        };
    }

    else {
        exit;
    };

    mysqli_close($connection);
?>