<?php
    $connection = mysqli_connect("ieugene.mysql.tools", "ieugene_admin", "23042000Eugennyy_Admin", "ieugene_yaroki");
    $answer = false;

    mysqli_set_charset($connection, "UTF8");
 
    if (!$connection) {
        echo "Виникла помилка під час встановлення з'єднання з базою даних. Будь-ласка, перезавантажте сторінку.";
        exit;
    };
    
    if (isset($_POST['newPassword']) && isset($_POST['update'])) {
        $newPassword = trim($_POST['newPassword']);
        $newPasswordHash = md5($newPassword);
        $update = trim($_POST['update']);
        
        $query = mysqli_query($connection, "UPDATE `Korystuvachi` SET `parol` = '$newPasswordHash' WHERE `poshta` = '$update'");

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