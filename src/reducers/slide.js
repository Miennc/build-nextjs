import * as TYPE from "../contants/slide";
import { HYDRATE } from "next-redux-wrapper";
import cloneDeep from "lodash/cloneDeep";

const initialState = {
    slide: {
        loading: false,
        data: [],
        errMess: null,
    },
};

const slideReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...cloneDeep(action.payload.slide) };

        case TYPE.GET_SLIDE:
            return {
                ...state,
                slide: {
                    ...state.slide,
                    loading: true,
                },
            };
        case TYPE.GET_SLIDE_SUCCESS:
            return {
                ...state,
                slide: {
                    ...state.slide,
                    loading: false,
                    data: action.data,
                    total: action.total,
                },
            };
        case TYPE.GET_SLIDE_ERROR:
            return {
                ...state,
                slide: {
                    ...state.slide,
                    loading: false,
                    errMess: action.errMess,
                },
            };
        default:
            return state;
    }
};

export default slideReducer;
