<?php
class SizeRepository{
    public $error;

    function getBySearch($search) {
        $cond = "productID='$search'";
        $products = $this->fetch($cond);
        return $products;
    }


    function fetch($cond = null) {
        global $conn;
        $sql = "SELECT * FROM size";
        if ($cond) {
            $sql .= " WHERE $cond";
        }
        $result = $conn->query($sql);
        $products = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $product = $row;
                $products[] = $product;
            }
        }
        return $products;
    }

    function update($productID, $size, $sl){
        global $conn; 

        $sql = "UPDATE size SET soluong=$sl WHERE productID=$productID AND size=$size";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;
    }

    function decreaseSizeQuantity($productID, $size, $sl){
        global $conn; 
        $sql = "SELECT soluong FROM size WHERE productID='$productID' AND size='$size'";
        $result = $conn -> query($sql); 
        if($result->num_rows > 0 ){
            $row = $result->fetch_assoc(); 
            $soluong = $row['soluong'];
            if($soluong >= $sl){
                $soluong = $soluong - $sl; 
                return $this->update($productID, $size, $soluong);
            }
            else{
                $this->error = "Số lượng sản phẩm không đủ";
                return false;
            }
        }
        $this->error = "Sản phẩm không tồn tại";
        return false;
    }

    function addSizeQuantity($productID, $size, $sl){
        global $conn; 
        $sql = "UPDATE size SET soluong=soluong+$sl WHERE productID='$productID' AND size='$size'";
        return $conn->query($sql); 

    }

    function save($data){
        global $conn; 
        $productID = $data->productID; 
        $soluong = $data->soluong; 
        $size = $data->size; 

        $sql = "INSERT INTO size (productID, soluong, size) VALUES ($productID, $soluong, $size)";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" . $conn->error;
        return false;
    }

   
}


?>