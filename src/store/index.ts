import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";

import { watchFetchOperatorsWithAddons } from "./operators/sagas";
import operatorsReducer from "./operators/slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  devTools: true,
  reducer: {
    operator: operatorsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

function* rootSaga() {
  yield all([fork(watchFetchOperatorsWithAddons)]);
}

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
