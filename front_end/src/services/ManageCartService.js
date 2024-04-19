import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyGioHangService extends baseService {
    layDanhSachGioHang = (a_id) => {
        return this.get(`http://localhost/BE/?c=cart&a=list&search=${a_id}`)
    }

    xoaDanhSachGioHang = (p_id, a_id) => {

        return this.delete(`http://localhost/BE/?c=cart&a=delete&p_id=${p_id}&a_id=${a_id}`)
    }
    themDanhSachGioHang = (formData) => {

        return this.post(`http://localhost/BE/?c=cart&a=save`, formData);

    }
    truGioHang = (p_id, a_id) => {
        return this.delete(`http://localhost/BE/?c=cart&a=minus&p_id=${p_id}&a_id=${a_id}`);
    }
    congGioHang = (p_id, a_id) => {

        return this.put(`http://localhost/BE/?c=cart&a=plus&p_id=${p_id}&a_id=${a_id}"`);

    }
}
export const quanLyGioHangService = new QuanLyGioHangService();