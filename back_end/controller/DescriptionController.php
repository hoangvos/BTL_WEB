<?php
header('Content-Type: application/json; charset=utf-8');
class DescriptionController{
    function list(){
        $sizeRepository = new SizeRepository(); 
        $search = $_GET["search"];
        $sizeQuantity = $sizeRepository->getBySearch($search);
        $result = json_encode($sizeQuantity);
        echo ($result);
    }
}


?>