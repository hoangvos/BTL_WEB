<?php
header('Content-Type: application/json; charset=utf-8');
class OutStandingController{
  function list(){
      $outStandingRepository = new OutStandingRepository(); 
      $search = $_GET["search"];
      $outStandingQuantity = $outStandingRepository->fetch();
      $result = json_encode($outStandingQuantity);
      echo ($result);
  }
} 
?>