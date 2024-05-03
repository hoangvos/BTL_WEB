<?php
header('Content-Type: application/json; charset=utf-8');
class DescriptionController{
    function list(){
        $descriptionRepository = new DescriptionRepository(); 
        $search = $_GET["search"];
        $descriptionQuantity = $descriptionRepository->getBySearch($search);
        $result = json_encode($descriptionQuantity);
        echo ($result);
    }
}


?>