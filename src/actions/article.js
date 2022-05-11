import * as TYPE from "../contants/article";

export const getArticle = (offset, page) => ({
    type: TYPE.GET_ARTICLE,
    offset,
    page,
});
export const getArticleSuccess = (data, total) => ({
    type: TYPE.GET_ARTICLE_SUCCESS,
    data: data,
    total: total,
});
export const getArticleError = (errMess) => ({
    type: TYPE.GET_ARTICLE_ERROR,
    errMess,
});
