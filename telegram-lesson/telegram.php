<?php

/* https://api.telegram.org/bot1881687961:AAHZej7Dc0FtXh902EuTstzcWMwgDZLdjl4/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$text = $_POST['user_text'];
$token = "1881687961:AAHZej7Dc0FtXh902EuTstzcWMwgDZLdjl4";
$chat_id = "935002005";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Сообщение' => $text
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>