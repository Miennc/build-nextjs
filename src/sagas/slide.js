import { put, takeLatest, all, call } from "redux-saga/effects";

import Request from "../utils/request";

import {
    getSlideSuccess,
    getSlideError,
} from "../actions/slide";

import { GET_SLIDE} from "../contants/slide";

export function* getSlide(action) {
    const url = `api/banners/get?active=1&id_website=4&&page_type=${action.offset.page_type}`;
    try {
        const response = yield call(Request, url);
        yield put(getSlideSuccess(response));
    } catch (error) {
        yield put(getSlideError(error.message));
    }
}

export default function* SlideSaga() {
    yield all([
        yield takeLatest(GET_SLIDE, getSlide),
    ]);
}
