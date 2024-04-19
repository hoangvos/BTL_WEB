import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyCommentService extends baseService {
    layDanhSachComment = (id) => {

        return this.get(`http://localhost/BE/?c=comment&a=list&search=${id}`)
    }
    xoaComment = (id) => {

        return this.delete(`http://localhost/BE/?c=comment&a=delete&id=${id}`)
    }

}

export const quanLyCommentService = new QuanLyCommentService();