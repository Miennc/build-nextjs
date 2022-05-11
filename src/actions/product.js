import * as TYPE from "../contants/product";

export const getProducts = (offset, page) => ({
  type: TYPE.GET_PRODUCTS,
  offset,
  page,
});
export const getProductsSuccess = (data, total) => ({
  type: TYPE.GET_PRODUCTS_SUCCESS,
  data: data,
  total: total,
});
export const getProductsError = (errMess) => ({
  type: TYPE.GET_PRODUCTS_ERROR,
  errMess,
});


export const postOrder = (payload) => ({
  type: TYPE.POST_ORDER,
  payload,
});
export const postOrderSuccess = (data, total) => ({
  type: TYPE.POST_ORDER_SUCCESS,
  data: data,
  total: total,
});
export const postOrderError = (errMess) => ({
  type: TYPE.POST_ORDER_ERROR,
  errMess,
});




//Selling===============================================================

export const getSellingProducts = (offset, page) => ({
  type: TYPE.GET_SELLING_PRODUCTS,
  offset,
  page,
});
export const getSellingProductsSuccess = (data, total) => ({
  type: TYPE.GET_SELLING_PRODUCTS_SUCCESS,
  data: data,
  total: total,
});
export const getSellingProductsError = (errMess) => ({
  type: TYPE.GET_SELLING_PRODUCTS_ERROR,
  errMess,
});

//Hot===============================================================

export const getHotProducts = (offset, page) => ({
  type: TYPE.GET_HOT_PRODUCTS,
  offset,
  page,
});
export const getHotProductsSuccess = (data, total) => ({
  type: TYPE.GET_HOT_PRODUCTS_SUCCESS,
  data: data,
  total: total,
});
export const getHotProductsError = (errMess) => ({
  type: TYPE.GET_HOT_PRODUCTS_ERROR,
  errMess,
});

