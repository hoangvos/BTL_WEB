import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLySubImageService extends baseService {

  laydescriptiontheoproductId = (productId) => {
    return this.get(`http://localhost/BE/?c=subImage&a=list&search=${productId}`)
  }

}

export const quanLyDescriptionService = new QuanLyDescriptionService();