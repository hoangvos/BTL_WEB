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
    function update() {
        $data = json_decode(file_get_contents("php://input"));
        $subImageRepository = new SubImageRepository(); 
            
        if ($subImageRepository->update($data)) {
            $_SESSION["success"] = "Cập nhật mô tả sản phẩm thành công !!";
        } else {
            $_SESSION["error"] = $subImageRepository->error;
        }
    }   
    function delete() {
        $data = json_decode(file_get_contents("php://input"));
        $subImageRepository = new SubImageRepository(); 
            
        if ($subImageRepository->delete($data)) {
            $_SESSION["success"] = "Xóa mô tả sản phẩm thành công !!";
        } else {
            $_SESSION["error"] = $subImageRepository->error;
        }
    }   
}


?>