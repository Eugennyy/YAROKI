<?php
    $connection = mysqli_connect("ieugene.mysql.tools", "ieugene_admin", "23042000Eugennyy_Admin", "ieugene_yaroki");

    mysqli_set_charset($connection, "UTF8");

    if (!$connection) {
        echo "Виникла помилка під час встановлення з'єднання з базою даних. Будь-ласка, перезавантажте сторінку.";
        exit;
    };

    if (isset($_POST['login'])) {
        $login = trim($_POST['login']);

        $dbData = mysqli_query($connection, "SELECT `poshta`, `login`, `avatar` FROM `Korystuvachi` WHERE `login` = '$login'");
    
        while ($row = $dbData->fetch_assoc()) {
            $data = $row;
        };

        echo json_encode($data);
    }

    else if (isset($_POST['email'])) {
        $email = trim($_POST['email']);

        $dbData = mysqli_query($connection, "SELECT `poshta`, `login`, `avatar` FROM `Korystuvachi` WHERE `poshta` = '$email'");

        while ($row = $dbData->fetch_assoc()) {
            $data = $row;
        };

        echo json_encode($data);
    };
?>