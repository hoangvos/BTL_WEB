import { SET_DANH_SACH_SAN_PHAM,
  SET_SAN_PHAM_NAM,
  SET_SAN_PHAM_NAM_HUNTER,
  SET_SAN_PHAM_NAM_SANDAL,
  SET_SAN_PHAM_NAM_THE_THAO,
  SET_SAN_PHAM_NAM_CHAY_BO,
  SET_SAN_PHAM_NAM_DA_BANH,
  SET_SAN_PHAM_NAM_TAY,
  SET_SAN_PHAM_NAM_DEP,
  SET_SAN_PHAM_NU,
  SET_SAN_PHAM_NU_HUNTER,
  SET_SAN_PHAM_NU_GOSTO,
  SET_SAN_PHAM_NU_SANDAL,
  SET_SAN_PHAM_NU_BUP_BE,
  SET_SAN_PHAM_NU_THOI_TRANG,
  SET_SAN_PHAM_NU_CHAY_BO,
  SET_SAN_PHAM_NU_THE_THAO,
  SET_SAN_PHAM_NU_DEP,
  SET_SAN_PHAM_NU_TUI_XACH,
  SET_SAN_PHAM_BE_TRAI,
  SET_SAN_PHAM_BE_TRAI_SANDAL,
  SET_SAN_PHAM_BE_TRAI_THE_THAO,
  SET_SAN_PHAM_BE_TRAI_DEP,
  SET_SAN_PHAM_BE_GAI,
  SET_SAN_PHAM_BE_GAI_BUP_BE,
  SET_SAN_PHAM_BE_GAI_THE_THAO,
  SET_SAN_PHAM_BE_GAI_SANDAL,
  SET_SAN_PHAM_BE_GAI_DEP,
  SET_SAN_PHAM_BE_GAI_TAP_DI,
  SET_SAN_PHAM_ALL,
  SET_CHI_TIET_SAN_PHAM
} from "../actions/Types/ManageProductType";



const stateDefault = {
    arrProduct: [
    ],

    arrProductDefault: [],
    productDetail: []

}

export const QuanLySanPhamReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_SAN_PHAM: {
            state.arrProduct = action.arrProduct;
            state.arrProductDefault = state.arrProduct;
            return { ...state }
        }
        case SET_SAN_PHAM_NAM: {
            state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nam");
            return { ...state }
        }
        case SET_SAN_PHAM_NAM_HUNTER: {
            state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nam" && product.pkind === "Hunter");
            return { ...state }
        }
        case SET_SAN_PHAM_NAM_SANDAL: {
            state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nam" && product.pkind === "Sandal");
            return { ...state }
        }
        case SET_SAN_PHAM_NAM_THE_THAO: {
            state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nam" && product.pkind === "Giày Thể Thao");
            return { ...state }
        }
        case SET_SAN_PHAM_NAM_CHAY_BO: {
            state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nam" && product.pkind ===  "Giày Chạy Bộ");
            return { ...state }
        }
        case SET_SAN_PHAM_NAM_DA_BANH: {
            state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nam" && product.pkind === "Giày Đá Banh");
            return { ...state }
        }
        case SET_SAN_PHAM_NAM_TAY: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nam" && product.pkind === "Giày Tây");
          return { ...state }
        }
        case SET_SAN_PHAM_NAM_DEP: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nam" && product.pkind === "Dép");
          return { ...state }
        }
        case SET_SAN_PHAM_NU: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nữ");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_HUNTER: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nữ" && product.pkind === "Hunter");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_GOSTO: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nữ" && product.pkind === "GOSTO");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_SANDAL: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nữ"&& product.pkind === "Sandal");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_BUP_BE: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nữ"&& product.pkind === "Giày búp bê");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_THOI_TRANG: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nữ"&& product.pkind === "Giày thời trang");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_CHAY_BO: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nữ"&& product.pkind === "Giày chạy bộ");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_THE_THAO: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nữ"&& product.pkind === "Giày thể thao");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_DEP: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nữ"&& product.pkind === "Dép");
          return { ...state }
        }
        case SET_SAN_PHAM_NU_TUI_XACH: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Nữ"&& product.pkind === "Túi xách");
          return { ...state }
        }

        case SET_SAN_PHAM_BE_TRAI: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Bé trai");
          return { ...state }
        }
        case SET_SAN_PHAM_BE_TRAI_SANDAL: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Bé trai" && product.pkind === "Sandal");
          return { ...state }
        }
        case SET_SAN_PHAM_BE_TRAI_THE_THAO: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Bé trai" && product.pkind === "Giày thể thao");
          return { ...state }
        }
        case SET_SAN_PHAM_BE_TRAI_DEP: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Bé trai" && product.pkind === "Dép");
          return { ...state }
        } 
        case SET_SAN_PHAM_BE_GAI: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Bé gái");
          return { ...state }
        } 
        case SET_SAN_PHAM_BE_GAI_BUP_BE: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Bé gái" && product.pkind === "Giày búp bê");
          return { ...state }
        } 
        case SET_SAN_PHAM_BE_GAI_THE_THAO: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Bé gái" && product.pkind === "Giày thể thao");
          return { ...state }
        } 
        case SET_SAN_PHAM_BE_GAI_SANDAL: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Bé gái" && product.pkind === "Sandal");
          return { ...state }
        } 
        case SET_SAN_PHAM_BE_GAI_DEP: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Bé gái" && product.pkind === "Dép");
          return { ...state }
        } 
        case SET_SAN_PHAM_BE_GAI_TAP_DI: {
          state.arrProduct = state.arrProductDefault.filter(product => product.pgender === "Bé gái" && product.pkind === "Dày tập đi");
          return { ...state }
        } 
       case SET_SAN_PHAM_ALL: {
            state.arrProduct = state.arrProductDefault.filter(product => product.pkind !== undefined && product.pkind !== null && product.pkind !== '');
            return { ...state }
        }
        case SET_CHI_TIET_SAN_PHAM: {

            state.productDetail = action.productDetail;
            return { ...state };

        }

        default: return { ...state }
    }
}