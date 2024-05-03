<?php
header('Content-Type: application/json; charset=utf-8');
class SubImageController{
    function list(){
        $subImageRepository = new SubImageRepository(); 
        $search = $_GET["search"];
        $subImageQuantity = $subImageRepository->getBySearch($search);
        $result = json_encode($subImageQuantity);
        echo ($result);
    }
}


?>