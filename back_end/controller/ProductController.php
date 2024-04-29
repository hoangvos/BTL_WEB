<?php 
header('Content-Type: application/json; charset=utf-8');
class ProductController {
    function list() {
        $productRepository = new ProductRepository();
        $search = "";
        if (!empty($_GET["search"])) {
            $search = $_GET["search"];
            $products =  $productRepository->getBySearch($search);
        }
        elseif(!empty($_GET["filter"])){
            $filter = $_GET["filter"];
            $products =  $productRepository->getByFilter($filter);
        }
        else {
            $products =  $productRepository->getAll();
        }
    
        $user=json_encode($products );
        echo ($user);
    }
    function update() {
        $data=json_decode(file_get_contents("php://input"));
        $productRepository = new ProductRepository();
       
        if ($productRepository->update($data)) {
            $_SESSION["success"] = "Đã tạo cập nhật sinh viên thành công";
        }
        else {
            $_SESSION["error"] = $productRepository->error;
        }

    }

    function save()
    {
        $data=json_decode(file_get_contents("php://input"));
        $productRepository = new ProductRepository();
        if ($productRepository->save($data)) {
            $_SESSION["success"] = "Đã tạo sản phẩm thành công";
        }
        else {
            $_SESSION["error"] = $productRepository->error;
        }
    }
    function delete() {
        $id = $_GET["id"];
        $productRepository = new ProductRepository();
        if ( $productRepository->delete($id)) {
            $_SESSION["success"] = "Đã xóa user thành công";
            echo "thanh cong";
        }
        else {
            $_SESSION["error"] = $productRepository->error;
            echo  $productRepository->error;
        }
    }
}
?>