import * as TYPE from "../contants/category";

export const getCategory = (offset, page) => ({
    type: TYPE.GET_CATEGORY,
    offset,
    page,
});
export const getCategorySuccess = (data, total) => ({
    type: TYPE.GET_CATEGORY_SUCCESS,
    data: data,
    total: total,
});
export const getCategoryError = (errMess) => ({
    type: TYPE.GET_CATEGORY_ERROR,
    errMess,
});

//filter cat parent ==============================

export const getFilterCategory = (idCat) => ({
    type: TYPE.GET_FILTER_CATEGORY,
    idCat: idCat,
});
export const getFilterCategorySuccess = (data, total) => ({
    type: TYPE.GET_FILTER_CATEGORY_SUCCESS,
    data: data,
    total: total,
});
export const getFilterCategoryError = (errMess) => ({
    type: TYPE.GET_FILTER_CATEGORY_ERROR,
    errMess,
});

//filter cat child ==============================
export const getFilter = (offset, page) => ({
    type: TYPE.GET_FILTER,
    offset,
    page,
});
export const getFilterSuccess = (data, total) => ({
    type: TYPE.GET_FILTER_SUCCESS,
    data: data,
    total: total,
});
export const getFilterError = (errMess) => ({
    type: TYPE.GET_FILTER_ERROR,
    errMess,
});