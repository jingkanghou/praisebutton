<?php

  //返回当前的毫秒时间戳
  function msectime() {
    list($msec, $sec) = explode(' ', microtime());
    return sprintf('%.0f', (floatval($msec) + floatval($sec)) * 1000);
  }

?>