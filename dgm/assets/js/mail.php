<?php
echo ('я работаю');
$recepient = "dgm.su@yandex.ru";
$siteName = "Донецкгормаш";

$name = trim($_POST["field-firstName"]);
$lastName = trim($_POST["field-lastName"]);
$email = trim($_POST["field-email"]);
$phone = trim($_POST["fields-phoneNumber"]);
$company = trim($_POST["fields-company"]);
$comments = trim($_POST["field-commentOrQuestion"]);

$message = "Имя: $name \n Фамилия: $lastName \n e-mail:$email \n  Телефон: $phone \n Компания: $company \n Сообщение: $comments";

$pagetitle = "Сооющение с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>