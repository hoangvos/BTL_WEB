<?php 
class ProductRepository {
    public $error;

    function getBySearch($search) {
        $cond = "id='$search'";
        $products = $this->fetch($cond);
        return $products;
    }
    function getAll() {
        return $this->fetch();
    }

    function fetch($cond = null) {
        global $conn;
        $sql = "SELECT * FROM product";
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
    function save($data) {
        global $conn;
        $ptitle= $data->ptitle;
        $pimg= $data->pimg;
        $pprice= $data->pprice;
        $pgender= $data->pgender;
        $pkind= $data->pkind;
       
        if($pimg!="" and $pkind!="" and $pprice!="" and $ptitle!=""  )
        {
            $sql = "INSERT INTO product(ptitle,pimg,pprice,pgender,pkind) VALUES('$ptitle','$pimg','$pprice','$pgender','$pkind',)";
            if ($conn->query($sql)) {
                return true;
            }
            $this->error = "Error: $sql <br>" .$conn->error ;
            return false;
        }else{
            return false;
        }
    }
    function delete($id) {
        global $conn;
        $sql = "DELETE FROM product WHERE id=$id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
    function update($data) {
        global $conn;
        $id = $data->id;
        $ptitle= $data->ptitle;
        $pimg= $data->pimg;
        $pprice= $data->pprice;
        $pkind= $data->pkind;
        $sql = "UPDATE product SET ptitle='$ptitle', pprice='$pprice', pkind='$pkind',pimg='$pimg'  WHERE id = $id";
        if ($conn->query($sql)) {
            return true;
        }
        $this->error = "Error: $sql <br>" .$conn->error ;
        return false;

    }
}
?>