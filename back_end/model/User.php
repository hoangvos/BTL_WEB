<?php 
class User {
    public $id;
    public $username;
    public $password;
    public $role;
    public $fullname;
    public $email; 
    public $address;
    public $phonenumber;

    

    function __construct($id,$username,$password,$role,$fullname,$email, $address, $phonenumber) {
        $this->id = $id;
        $this->username = $username;
        $this->password = $password;
        $this->role = $role;
        $this->fullname = $fullname;
        $this->email = $email;
        $this->address = $address;
        $this->phonenumber = $phonenumber;
    }

}

?>