<?php
if((isset($_POST['cf2_field_1'])&&$_POST['cf2_field_1']!="")&&(isset($_POST['cf2_field_2'])&&$_POST['cf2_field_2']!="")){
$recepient = "info@oxrana.net";
$siteName = "Внутриведомственная охрана консультация";
$name = trim($_POST["cf2_field_1"]);
$phone = trim($_POST["cf2_field_2"]);
$message = "Имя: $name \n Телефон: $phone";
$pagetitle = "Сообщение с сайта \"$siteName\"";
mail($recepient, $pagetitle, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
}
?>