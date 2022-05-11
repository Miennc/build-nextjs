import { applyMiddleware, createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootSaga from "./sagas";
import rootReducer from "./reducers";

export const makeStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  middleware.push(logger);
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
