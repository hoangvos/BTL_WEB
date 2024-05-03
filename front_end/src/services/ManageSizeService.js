import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLySizeService extends baseService {

  laysizetheoproductId = (productId) => {
    return this.get(`http://localhost/BE/?c=size&a=list&search=${productId}`)
  }
  themluongsanphamtheosize = (productID, size, sl) => {
    return this.get(`http://localhost/BE/?c=size&a=add&productID=${productID}&size=${size}&sl=${sl}`);
  }
  giamluongsanphamtheosize = (productID, size, sl) => {
    return this.get(`http://localhost/BE/?c=size&a=add&productID=${productID}&size=${size}&sl=${sl}`);
  }
  themSizemoi = (productID, soluong, size)=>{
    const sendData = {
      productID: productID,
      soluong: soluong,
      size: size,
    };
    axios
    .post("http://localhost/BE/?c=size&a=save", sendData)
    .then((result) => {

    });
  }

  capnhatSize = (productID, size, sl) => {
    return this.get(`http://localhost/BE/?c=size&a=update&productID=${productID}&size=${size}&sl=${sl}`);
  }

}

export const quanLySizeService = new QuanLySizeService();