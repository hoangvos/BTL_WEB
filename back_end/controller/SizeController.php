<?php
header('Content-Type: application/json; charset=utf-8');
class SizeController{
    function list(){
        $sizeRepository = new SizeRepository(); 
        $search = $_GET["search"];
        $sizeQuantity = $sizeRepository->getBySearch($search);
        $result = json_encode($sizeQuantity);
        echo ($result);
    }

    function add(){
        $id = $_GET['id'];
        $sl = $_GET['sl'];
        $sizeRepository = new SizeRepository(); 
        if($sizeRepository->addSizeQuantity($id, $sl)){
            $_SESSION["success"] = "Thêm sản phẩm thành công !!";
        }
        else{
            $_SESSION["error"] =  "Thêm sản phẩm thất bại !!";
        }
    }

    function minus(){
        $id = $_GET['id'];
        $sl = $_GET['sl'];
        $sizeRepository = new SizeRepository(); 
        if($sizeRepository->decreaseSizeQuantity($id, $sl)){
            $_SESSION["success"] = "Giảm sản phẩm thành công !!";
        }
        else{
            $_SESSION["error"] =  $sizeRepository->error;
        }
    }

    function save() {
        $data = json_decode(file_get_contents("php://input"));
        $sizeRepository = new SizeRepository(); 
            
        if ($sizeRepository->save($data)) {
            $_SESSION["success"] = "Thêm sản phẩm mới thành công !!";
        } else {
            $_SESSION["error"] = $sizeRepository->error;
        }
    }   

    function update(){
        $data = json_decode(file_get_contents("php://input"));
        $sizeRepository = new SizeRepository(); 
            
        if ($sizeRepository->update($data)) {
            $_SESSION["success"] = "Cập nhật sản phẩm thành công !!";
        } else {
            $_SESSION["error"] = $sizeRepository->error;
        }
    }

    function delete(){
        $id = $_GET['id'];
        $sizeRepository = new SizeRepository(); 

        if ($sizeRepository->delete($id)) {
            $_SESSION["success"] = "Xóa sản phẩm thành công !!";
        } else {
            $_SESSION["error"] = $sizeRepository->error;
        }
    }

}


?>