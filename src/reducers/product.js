import * as TYPE from "../contants/product";
import { HYDRATE } from "next-redux-wrapper";
import cloneDeep from "lodash/cloneDeep";

const initialState = {
  product: {
    loading: false,
    data: [],
    total: 0,
    errMess: null,
  },
  productSelling: {
    loading: false,
    data: [],
    errMess: null,
  },

  productHot: {
    loading: false,
    data: [],
    errMess: null,
  },
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...cloneDeep(action.payload.product) };

    case TYPE.GET_PRODUCTS:
      return {
        ...state,
        product: {
          ...state.product,
          loading: true,
        },
      };
    case TYPE.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        product: {
          ...state.product,
          loading: false,
          data: action.data,
          total: action.total,
        },
      };
    case TYPE.GET_PRODUCTS_ERROR:
      return {
        ...state,
        product: {
          ...state.product,
          loading: false,
          errMess: action.errMess,
        },
      };


    //   case TYPE.GET_DETAIL:
    //     return {
    //         ...state,
    //         productDetail: {
    //             ...state.productDetail,
    //             loading: true,
    //         },
    //     };
    // case TYPE.GET_DETAIL_SUCCESS:
    //     return {
    //         ...state,
    //         productDetail: {
    //             ...state.productDetail,
    //             loading: false,
    //             data: action.data,
    //         },
    //     };
    // case TYPE.GET_DETAIL_ERROR:
    //     return {
    //         ...state,
    //         productDetail: {
    //             ...state.productDetail,
    //             loading: false,
    //             errMess: action.errMess,
    //         },
    //     };


    case TYPE.GET_SELLING_PRODUCTS:
      return {
        ...state,
        productSelling: {
          ...state.productSelling,
          loading: true,
        },
      };
    case TYPE.GET_SELLING_PRODUCTS_SUCCESS:
      return {
        ...state,
        productSelling: {
          ...state.productSelling,
          loading: false,
          data: action.data,
          total: action.total,
        },
      };
    case TYPE.GET_SELLING_PRODUCTS_ERROR:
      return {
        ...state,
        productSelling: {
          ...state.productSelling,
          loading: false,
          errMess: action.errMess,
        },
      };

    case TYPE.GET_HOT_PRODUCTS:
      return {
        ...state,
        productHot: {
          ...state.productHot,
          loading: true,
        },
      };
    case TYPE.GET_HOT_PRODUCTS_SUCCESS:
      return {
        ...state,
        productHot: {
          ...state.productHot,
          loading: false,
          data: action.data,
          total: action.total,
        },
      };
    case TYPE.GET_HOT_PRODUCTS_ERROR:
      return {
        ...state,
        productHot: {
          ...state.productHot,
          loading: false,
          errMess: action.errMess,
        },
      };

   
    default:
      return state;
  }
};

export default productReducer;
