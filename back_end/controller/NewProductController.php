<?php
header('Content-Type: application/json; charset=utf-8');
class NewProductController{
  function list(){
      $newProductRepository = new NewProductRepository(); 
      $search = $_GET["search"];
      $newProductQuantity = $newProductRepository->fetch();
      $result = json_encode($newProductQuantity);
      echo ($result);
  }
} 
?>