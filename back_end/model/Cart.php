<?php 
class Cart {
    public $id;
    public $sl;
    public $a_id;
    public $p_id;

    

    function __construct($id,$sl,$a_id, $p_id) {
        $this->id= $id;
        $this->sl = $sl;
        $this->a_id = $a_id;
        $this->p_id = $p_id;
       
    }

}

?>