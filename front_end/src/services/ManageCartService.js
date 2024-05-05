import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyGioHangService extends baseService {
    layDanhSachGioHang = (a_id) => {
        return this.get(`http://localhost/BE/?c=cart&a=list&search=${a_id}`)
    }

    xoaDanhSachGioHang = (p_id, a_id, size) => {
        return this.delete(`http://localhost/BE/?c=cart&a=delete&p_id=${p_id}&a_id=${a_id}&size=${size}`)
    }
    themDanhSachGioHang = (sl, a_id, p_id, size) => {
        formData = {
            sl : sl,
            a_id : a_id,
            p_id : p_id,
            size : size
        }
        return this.post(`http://localhost/BE/?c=cart&a=save`, formData);

    }
    truGioHang = (p_id, a_id, size) => {
        return this.delete(`http://localhost/BE/?c=cart&a=minus&p_id=${p_id}&a_id=${a_id}&size=${size}`);
    }
    congGioHang = (p_id, a_id, size) => {
        return this.put(`http://localhost/BE/?c=cart&a=plus&p_id=${p_id}&a_id=${a_id}&size=${size}`);
    }
}
export const quanLyGioHangService = new QuanLyGioHangService();