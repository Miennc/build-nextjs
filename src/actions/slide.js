import * as TYPE from "../contants/slide";

export const getSlide = (offset, page) => ({
    type: TYPE.GET_SLIDE,
    offset,
    page,
});
export const getSlideSuccess = (data, total) => ({
    type: TYPE.GET_SLIDE_SUCCESS,
    data: data,
    total: total,
});
export const getSlideError = (errMess) => ({
    type: TYPE.GET_SLIDE_ERROR,
    errMess,
});
