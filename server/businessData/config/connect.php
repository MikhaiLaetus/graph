<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");
    header('Content-type: json/application');
    
    $connect = mysqli_connect('localhost', 'root', '', 'business');
    if(!$connect) {
        die('Ошибка подключения');
    }