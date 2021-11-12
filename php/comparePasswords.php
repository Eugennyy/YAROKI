<?php
    $connection = mysqli_connect("ieugene.mysql.tools", "ieugene_admin", "23042000Eugennyy_Admin", "ieugene_yaroki");
    $answer = false;

    mysqli_set_charset($connection, "UTF8");

    if (!$connection) {
        echo "Виникла помилка під час встановлення з'єднання з базою даних. Будь-ласка, перезавантажте сторінку.";
        exit;
    };

    if (isset($_POST['actualPassword']) && isset($_POST['email'])) {
        $actualPassword = trim($_POST['actualPassword']);
        $actualPasswordHash = md5($actualPassword);
        $email = trim($_POST['email']);
        
        $dbData = mysqli_query($connection, "SELECT `parol` FROM `Korystuvachi` WHERE `poshta` = '$email'");
    
        while ($row = $dbData->fetch_assoc()) {
            $data[] = $row[parol];
        };
        
        $data[1] = $actualPasswordHash;

        if ($data[0] === $data[1]) {
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