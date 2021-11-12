<?php
    $to = 'bazidostum17@gmail.com';
    $telephone = trim($_POST['telephone']);
    $car = trim($_POST['car']);
    $price = trim($_POST['price']);
    $headers = 'Content-type: text/plain; charset=utf-8' . PHP_EOL;
    $headers .= "From: " . PHP_EOL;
    $answer = false;

    if (isset($_POST['testDrive'])) {
        $subject = 'Заява на тест-драйв авто';
        $message = "Запит на надання тест-драйву авто: номер телефону користувача - $telephone, автомобіль - $car, ціна - $price грн.";

        if (mail($to, $subject, $message, $headers)) {
            $answer = true;
            echo $answer;
            exit;
        }

        else {
            if (mail($to, $subject, $message, $headers)) {
                $answer = true;
                echo $answer;
                exit;
            }

            else {
                echo $answer;
                exit;
            };
        };
    }

    else if (isset($_POST['makeOffer'])) {
        $subject = 'Заява на оформлення авто';
        $message = "Запит на оформлення авто: номер телефону користувача - $telephone, автомобіль - $car, ціна - $price грн.";

        if (mail($to, $subject, $message, $headers)) {
            $answer = true;
            echo $answer;
            exit;
        }

        else {
            if (mail($to, $subject, $message, $headers)) {
                $answer = true;
                echo $answer;
                exit;
            }

            else {
                echo $answer;
                exit;
            };
        };
    };
?>