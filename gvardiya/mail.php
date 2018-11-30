<?php
if((isset($_POST['cf_field_1'])&&$_POST['cf_field_1']!="")&&(isset($_POST['cf_field_2'])&&$_POST['cf_field_2']!="")){
$recepient = "info@oxrana.net";
$siteName = "Внутриведомственная охрана расчитать";
$name = trim($_POST["cf_field_1"]);
$phone = trim($_POST["cf_field_2"]);
$comments = trim($_POST["cf_field_3"]);
$message = "Имя: $name \n Телефон: $phone \n Тип системы: $comments";
$pagetitle = "Сообщение с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
}

?>