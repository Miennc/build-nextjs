import * as TYPE from "../contants/article";
import { HYDRATE } from "next-redux-wrapper";
import cloneDeep from "lodash/cloneDeep";

const initialState = {
    article: {
        loading: false,
        data: [],
        errMess: null,
    },
};

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...cloneDeep(action.payload.article) };

        case TYPE.GET_ARTICLE:
            return {
                ...state,
                    article: {
                    ...state.article,
                    loading: true,
                },
            };
        case TYPE.GET_ARTICLE_SUCCESS:
            return {
                ...state,
                article: {
                    ...state.article,
                    loading: false,
                    data: action.data,
                    total: action.total,
                },
            };
        case TYPE.GET_ARTICLE_ERROR:
            return {
                ...state,
                article: {
                    ...state.article,
                    loading: false,
                    errMess: action.errMess,
                },
            };
        default:
            return state;
    }
};

export default articleReducer;
