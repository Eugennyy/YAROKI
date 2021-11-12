<?php
    if (isset($_POST['code']) && isset($_POST['email']) && isset($_POST['login'])) {
        $code = trim($_POST['code']);
        $email = trim($_POST['email']);
        $login = trim($_POST['login']);
        $subject = "Код підтвердження аккаунту";
        $message = "Вітаємо $login! Ваш код підтвердження аккаунту на сайті автосалон YAROKI: $code. Якщо ви впевнені, що не реєструвалися, негайно зверніться до підтримки нашого сайту.";
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