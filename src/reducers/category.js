import * as TYPE from "../contants/category";
import {HYDRATE} from "next-redux-wrapper";
import cloneDeep from "lodash/cloneDeep";

const initialState = {
    category: {
        loading: false,
        data: [],
        errMess: null,
    },
    categoryFilter: {
        loading: false,
        data: [],
        errMess: null,
    },
    filter: {
        loading: false,
        data: [],
        errMess: null,
    },
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...cloneDeep(action.payload.category)};

        case TYPE.GET_CATEGORY:
            return {
                ...state,
                category: {
                    ...state.category,
                    loading: true,
                },
            };
        case TYPE.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                category: {
                    ...state.category,
                    loading: false,
                    data: action.data,
                    total: action.total,
                },
            };
        case TYPE.GET_CATEGORY_ERROR:
            return {
                ...state,
                category: {
                    ...state.category,
                    loading: false,
                    errMess: action.errMess,
                },
            };

        case TYPE.GET_FILTER_CATEGORY:
            return {
                ...state,
                categoryFilter: {
                    ...state.categoryFilter,
                    loading: true,
                },
            };
        case TYPE.GET_FILTER_CATEGORY_SUCCESS:
            return {
                ...state,
                categoryFilter: {
                    ...state.categoryFilter,
                    loading: false,
                    data: action.data,
                    total: action.total,
                },
            };
        case TYPE.GET_FILTER_CATEGORY_ERROR:
            return {
                ...state,
                categoryFilter: {
                    ...state.categoryFilter,
                    loading: false,
                    errMess: action.errMess,
                },
            };

        case TYPE.GET_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    loading: true,
                },
            };
        case TYPE.GET_FILTER_SUCCESS:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    loading: false,
                    data: action.data,
                    total: action.total,
                },
            };
        case TYPE.GET_FILTER_ERROR:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    loading: false,
                    errMess: action.errMess,
                },
            };

        default:
            return state;
    }
};

export default categoryReducer;