<?php
if (isset($_POST['cname']) && isset($_POST['cemail']) && isset($_POST['cfeedback'])) {

  if (empty($_POST['cname']) || empty($_POST['cemail']) || empty($_POST['cfeedback'])) {

    echo "Сообщение не отправлено";
  } else {

$headers = "Content-type: text/plain; charset = cp1251";
$subject = "Отзыв";
$name = strip_tags($_POST['cname']);
    $email = strip_tags($_POST['cemail']);
    $feedback = strip_tags($_POST['cfeedback']);
    $result = 'Имя: '. $name . ', И-мэил: '. $email. ', Отзыв: '. $feedback .

    mail('info@capsula-vremeni.com', $subject, $result);
header ("Location: index.html");
    echo alert("Спасибо за Ваш отзыв. Он очень важен для нас.");

  }
}	else {

  echo "При отправке произошла ошибка, повторите пожалуйста отправку";
}
?>