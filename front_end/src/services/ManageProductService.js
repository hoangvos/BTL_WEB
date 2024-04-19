import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLySanPhamService extends baseService {

    layDanhSachSanPham = () => {
        return this.get(`http://localhost/BE/?c=product&a=list`);
    }

    layThongTinSanPham = (id) => {
        return this.get(`http://localhost/BE/?c=product&a=list&search=${id}`)
    }
    xoaSanPham = (id) => {
        return this.delete(`http://localhost/BE/?c=product&a=delete&id=${id}`)
    }

}

export const quanLySanPhamService = new QuanLySanPhamService();