<?php
class OutStandingRepository {
    public $error;
    function getBySearch($search) {
        $cond = "productID='$search'";
        $products = $this->fetch($cond);
        return $products;
    }
    function fetch($cond = null) {
        global $conn;
        $productRepository = new ProductRepository();
        $sql = "SELECT * FROM outstanding";
        if ($cond) {
            $sql .= " WHERE $cond";
        }
        $result = $conn->query($sql);
        $products = [];
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $product = $productRepository->getBySearch($row['productID']);
                $products[] = $product[0];
            }
        }
        return $products;
    }   
}
?>