<?php
header('Content-Type: application/json; charset=utf-8');
class DiscountController{
  function list(){
      $discountRepository = new DiscountRepository(); 
      $search = $_GET["search"];
      $discountQuantity = $discountRepository->fetch();
      $result = json_encode($discountQuantity);
      echo ($result);
  }
} 
?>