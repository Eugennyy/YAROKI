<?php
    if (isset($_POST['code']) && isset($_POST['email'])) {
        $code = trim($_POST['code']);
        $email = trim($_POST['email']);
        $subject = "Код скидання";
        $message = "Вітаємо! Ваш код скидання на сайті автосалон YAROKI: $code. Якщо ви впевнені, що не подавали заяву на скидання даних, негайно зверніться до підтримки нашого сайту.";
        $headers = 'Content-type: text/plain; charset=utf-8' . PHP_EOL;
        $headers .= "From: " . PHP_EOL;
        $answer = false;

        if (mail($email, $subject, $message, $headers)) {
            $answer = true;
            echo $answer;
            exit;
        }
    
        else {
            if (mail($email, $subject, $message, $headers)) {
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

    else {
        exit;
    };
?>