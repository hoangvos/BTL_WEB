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
    function update() {
        $data = json_decode(file_get_contents("php://input"));
        $descriptionRepository = new DescriptionRepository(); 
            
        if ($descriptionRepository->update($data)) {
            $_SESSION["success"] = "Cập nhật mô tả sản phẩm thành công !!";
            echo json_encode("true");
        } else {
            $_SESSION["error"] = $descriptionRepository->error;
        }
    }   
    function delete() {
        $data = json_decode(file_get_contents("php://input"));
        $descriptionRepository = new DescriptionRepository(); 
            
        if ($descriptionRepository->delete($data)) {
            $_SESSION["success"] = "Xóa mô tả sản phẩm thành công !!";
        } else {
            $_SESSION["error"] = $descriptionRepository->error;
        }
    }   
    function save() {
        $data = json_decode(file_get_contents("php://input"));
        $descriptionRepository = new DescriptionRepository(); 
            
        if ($descriptionRepository->save($data)) {
            $_SESSION["success"] = "Thêm mô tả sản phẩm thành công !!";
            echo json_encode("true");
        } else {
            $_SESSION["error"] = $descriptionRepository->error;
        }
    }


}


?>