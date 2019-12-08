<?php
if (isset($_POST['iname']) && isset($_POST['ie-mail']) && isset($_POST['iaddress']) && isset($_POST['iamount'])) {

  if (empty($_POST['iname']) || empty($_POST['ie-mail']) || empty($_POST['iaddress']) || empty($_POST['iamount'])) {

    echo "Сообщение не отправлено";
  } else {

$headers = "Content-type: text/plain; charset = cp1251";
$subject = "Сообщение с вашего сайта";
$name = strip_tags($_POST['iname']);
    $email = strip_tags($_POST['ie-mail']);
    $address = strip_tags($_POST['iaddress']);
    $amount = strip_tags($_POST['iamount']);
    $result = 'Имя: '. $name . ', И-мэил: '. $email. ', Адрес: '. $address . ', Кол-во: ' . $amount;

    mail('info@capsula-vremeni.com', $subject, $result);

    echo "";
  }
}	else {

  echo "При отправке произошла ошибка, повторите пожалуйста отправку";
}
?>
<html>
    <title>Мощная антивозрастная сыворотка! Капсула времени с egf фактором! Возвращает молодость! Купить можно только у нас!</title>
    <meta charset="utf-8"/>
<meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="css/main.css"/>

           <!---forma-->
             <div class="order-thanks">
            <div class="form-title">
                <b>Спасибо за Ваш заказ!</b> <br><br><span>Мы свяжемся с Вами в самое ближайшее время. Пожалуйста проверьте почту.</span>
            </div>
            <a href="../index.html"> Вернуться на главную</a>
             </div>
         <!--forma end-->
</html>