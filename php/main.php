<?php
    $connection = mysqli_connect("ieugene.mysql.tools", "ieugene_admin", "23042000Eugennyy_Admin", "ieugene_yaroki");

    mysqli_set_charset($connection, "UTF8");

    if (!$connection) {
        echo "Виникла помилка під час встановлення з'єднання з базою даних. Будь-ласка, перезавантажте сторінку.";
        exit;
    };

    $dbData = mysqli_query($connection, "SELECT * FROM Avtomobyli");
    
    while ($row = $dbData->fetch_assoc()) {
        $data[] = $row;
    };

    echo json_encode($data);
?>