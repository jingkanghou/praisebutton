<?php
  require_once "../model/ResultInfo.php";
  require_once "../DAL/praise.php";
  require_once("../common/utility.php");

  $result = new ResultInfo();
  $praise = new Praise();

  $result->extMsg = $result->extMsg."-in php server:".msectime();

  try {
    if($_SERVER['REQUEST_METHOD'] == 'GET'){           
      $result->result = $praise->praiseCount();
      $result->errorMsg = $praise->errorMessage();
      $result->extMsg = $result->extMsg.$praise->extMsg();
    }
    elseif ($_SERVER['REQUEST_METHOD'] == 'POST'){
      $result->result = $praise->praise();
      $result->errorMsg = $praise->errorMessage();
      $result->extMsg = $result->extMsg.$praise->extMsg();
    }

    if($result->errorMsg){
      $result->success = false;
    }
    else {
      $result->success = true;
    }

  }
  catch (Exception $e) {
    $result->success = false;
    $result->errorMsg = $e->getMessage();
    $result->result = null;
  }


  $result->extMsg = $result->extMsg."-php server return:".msectime();
  echo json_encode($result);
?>