<?php
    require_once 'config/connect.php';
    $data = mysqli_query($connect, "SELECT * FROM  `reports`");
    
    $dataList = [];

    while($info = mysqli_fetch_assoc($data)) {
        $dataList[] = $info;
    }

    echo json_encode($dataList)
?>