<?php
class SubImageRepository{
    public $error;

    function getBySearch($search) {
        $cond = "productID='$search'";
        $products = $this->fetch($cond);
        return $products;
    }
    function fetch($cond = null) {
        global $conn;
        $sql = "SELECT * FROM subimage";
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
}


?>