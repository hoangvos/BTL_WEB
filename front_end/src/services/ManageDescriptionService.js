import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyDescriptionService extends baseService {

  laydescriptiontheoproductId = (productId) => {
    return this.get(`http://localhost/BE/?c=description&a=list&search=${productId}`)
  }

}

export const quanLyDescriptionService = new QuanLyDescriptionService();