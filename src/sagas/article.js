import { put, takeLatest, all, call } from "redux-saga/effects";

import Request from "../utils/request";

import {
    getArticleSuccess,
    getArticleError,
} from "../actions/article";

import { GET_ARTICLE} from "../contants/article";

export function* getArticle(action) {
    const url = `api/articles/get?active=1&id_website=4`;
    try {
        const response = yield call(Request, url);
        yield put(getArticleSuccess(response));
    } catch (error) {
        yield put(getArticleError(error.message));
    }
}

export default function* SlideSaga() {
    yield all([
        yield takeLatest(GET_ARTICLE, getArticle),
    ]);
}
