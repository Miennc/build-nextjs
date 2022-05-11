import {put, takeLatest, all, call} from "redux-saga/effects";

import Request from "../utils/request";

import {
    getProductsSuccess,
    getProductsError,
    getSellingProductsSuccess,
    getSellingProductsError,
    getHotProductsSuccess,
    getHotProductsError,
    postOrderSuccess,
    postOrderError,
} from "../actions/product";

import {GET_PRODUCTS, GET_SELLING_PRODUCTS, GET_HOT_PRODUCTS, POST_ORDER } from "../contants/product";

export function* getProducts(action) {
    const url = `api/products/get?active=1&id_website=4&id_cat=${action.offset?.id_cart ? action.offset?.id_cart:''}&id_filter=${action.offset?.id_filter ? action.offset?.id_filter :''}`;
    try {
        const response = yield call(Request, url);
        yield put(getProductsSuccess(response));
    } catch (error) {
        yield put(getProductsError(error.message));
    }
}

export function* postOrder(payload) {
    const url = `api/orders/add-from-react?id_website=4`;
    try {
        const response = yield call(Request, url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json, text-plain, */*",
                "X-Requested-With": "XMLHttpRequest",
            },
            credentials: "same-origin",
            body: JSON.stringify(payload.payload),
        });
        yield put(postOrderSuccess(response));
    } catch (error) {
        yield put(postOrderError(error.message));
    }

}

export function* getSellingProducts(action) {
    const url = `api/products/get?active=1&id_website=4&feature=1`;
    try {
        const response = yield call(Request, url);
        yield put(getSellingProductsSuccess(response));
    } catch (error) {
        yield put(getSellingProductsError(error.message));
    }
}

export function* getHotProducts(action) {
    const url = `api/products/get?active=1&id_website=4&highlight=1&offset=6`;
    try {
        const response = yield call(Request, url);
        yield put(getHotProductsSuccess(response));
    } catch (error) {
        yield put(getHotProductsError(error.message));
    }
}

export default function* ProductSaga() {
    yield all([
        yield takeLatest(GET_PRODUCTS, getProducts),
        yield takeLatest(GET_SELLING_PRODUCTS, getSellingProducts),
        yield takeLatest(GET_HOT_PRODUCTS, getHotProducts),
        // yield takeLatest(GET_DETAIL, getDetail),
        yield takeLatest(POST_ORDER, postOrder),
    ]);
}
