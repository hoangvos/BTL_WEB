import { baseService } from "./baseService";
import axios from 'axios';
import { toast } from "react-toastify";

export class QuanLyUserService extends baseService {


    layDanhSachUser = () => {
        return this.get(`http://localhost/qlsvmvc/?c=user&a=list`);
    }
    layThongTinUser = (id) => {
        return this.get(`http://localhost/qlsvmvc/?c=user&a=list&search=${id}`)
    }
    xoaUser = (id) => {
        return this.delete(`http://localhost/qlsvmvc/?c=user&a=delete&id=${id}`)

    }

    login = (username, password) =>{
        const sendData = {
            taiKhoan: username,
            matKhau: password
        }
        axios.post("http://localhost/BE/login.php", sendData).then((result) => {

            if (result.data.Status === '200') {
                localStorage.setItem("id", result.data.id);
                localStorage.setItem("username", result.data.username);
                localStorage.setItem("role", result.data.role);
                localStorage.setItem("fullname", result.data.fullname);
                localStorage.setItem("email", result.data.email);
                localStorage.setItem("phonenumber", result.data.phonenumber);
            
                var role = localStorage.getItem('role');
                if (role === "user") {
                    window.location.href = "/account";
                } else if (role === "admin") {
                    window.location.href = "/admin";
                }
            } else {
                toast.error("Tên đăng nhập hoặc mật khẩu sai!");
            }

        });
    }
    register_user = (username, password, fullname, email, address, phonenumber) => {
        const sendData = {
            username: username,
            password: password,
            fullname: fullname,
            email: email,
            address: address,
            phonenumber: phonenumber
        }
        axios.post("http://localhost/BE/?c=user&a=register", sendData).then((result) => {
            console.log(result)
            if (result.data === 'false') {
                toast.error("Tài khoản đã tồn tại")
            }
            else {    
                window.location.href = "/login";
            }
        });

    }


}



export const quanLyUserService = new QuanLyUserService();