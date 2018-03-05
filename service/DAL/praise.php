<?php
require_once("db-define.php");
require_once("../common/utility.php");

class Praise 
{

  private $conn = null;
  private $servername = "";
  private $username = "";
  private $password = "";
  private $dbname = "";
  private $isInitailed = false;
  private $errMsg = "";
  private $extMsg = "";

  function __construct(){
    $this->servername = servername; 
    $this->username = username; 
    $this->password = password; 
    $this->dbname = dbname;
  }

  function __destruct() {
    if($this->conn && !$this->conn->connect_error) {
      $this->conn->close();   
      $this->extMsg = $this->extMsg."-db connection closed:".msectime();
    }    
  }

  public function initrailize() {
    if($this->isInitailed){
      return true;
    }
    else {
      $this->extMsg = $this->extMsg."-begin db connection:".msectime();
      $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
      
      $this->conn->set_charset("utf-8");
      if ($this->conn->connect_error) {
        $this->errMsg = "连接失败: ".$this->conn->connect_error; 
        return false; 
      } 
      return true;
    }

  }

  public function errorMessage() {
    return $this->errMsg;
  }

  public function extMsg(){
    return $this->extMsg;
  }

  public function praise() {
    $result = false;
    
    if(!$this->initrailize()) {
      return false;
    }

    $sql = "SELECT * FROM praise";
    $query_result = $this->conn->query($sql);
    
    $id = 0;
    $count = 0;
    //has data

    if ($query_result->num_rows > 0) { 
      $first_row = $query_result->fetch_assoc();
      $id = $first_row["praise_id"];
      $count = $first_row["praise_count"];
    }

    $count++;
    if($id > 0){
      //update
      $sql = "UPDATE praise SET praise_count=$count WHERE praise_id=$id";

    }
    else {
      //insert
      $sql = "INSERT INTO praise (`praise_count`) VALUES($count)";
    }
    
    if ($this->conn->query($sql) === TRUE) {
      $result = true;
    } else {
      $result = false;
      $this->errMsg =  "Error: ".$this->conn->error;
    }

    return $result;
  }


  public function praiseCount() {
    $result = -1;
    
    if(!$this->initrailize()) {
      return -1;
    }

    $this->extMsg = $this->extMsg."-begin query praise count:".msectime(); 
    $sql = "SELECT praise_count FROM praise";
    $query_result = $this->conn->query($sql);
    $this->extMsg = $this->extMsg."-end query praise count:".msectime(); 

    if ($query_result->num_rows > 0) {
      $row = $query_result->fetch_assoc();
      $result = $row["praise_count"];
    }
    else {
      $result = 0;
    }

    return $result;
  }
}

?>