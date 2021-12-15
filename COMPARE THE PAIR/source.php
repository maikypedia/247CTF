<?php
  require_once('flag.php');
  $password_hash = "0e902564435691274142490923013038";
  $salt = "f789bbc328a3d1+a3";
  if(isset($_GET['password']) && md5($salt . "266029853") == $password_hash){
    echo $flag;
  }
  echo highlight_file(__FILE__, true);
?>