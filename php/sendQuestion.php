<?php
    $to = 'bazidostum17@gmail.com';
    $userName = trim($_POST['username']);
    $userMail = trim($_POST['email']);
    $subject = trim($_POST['subject']);
    $question = trim($_POST['question']);
    $fullQuestion = "Користувач $userName має запитання: $question";
    $headers = 'Content-type: text/plain; charset=utf-8' . PHP_EOL;
    $headers .= "From: " . $userMail . PHP_EOL;
    $answer = false;

    if (mail($to, $subject, $fullQuestion, $headers)) {
        $answer = true;
        echo $answer;
        exit;
    }

    else {
        if (mail($to, $subject, $fullQuestion, $headers)) {
            $answer = true;
            echo $answer;
            exit;
        }

        else {
            echo $answer;
            exit;
        };
    };
?>