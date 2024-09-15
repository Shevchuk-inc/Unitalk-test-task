import {
  fetchOperatorAddonsApi,
  fetchOperatorsApi,
  fetchTotalCountApi,
} from "@/api/operatorsApi";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeLatest } from "redux-saga/effects";

import { RootState } from "..";
import {
  fetchOperatorsWithAddonsFailure,
  fetchOperatorsWithAddonsRequest,
  fetchOperatorsWithAddonsSuccess,
  fetchTotalCountFailure,
  fetchTotalCountSuccess,
  saveOperatorAddons,
} from "./slice";
import { OperatorAddon, OperatorWithAddons } from "./types";

function* fetchInitialData() {
  try {
    const responseOperatorAddons: { data: OperatorAddon[] } = yield call(
      fetchOperatorAddonsApi,
    );

    const responseTotalCount: { data: OperatorWithAddons[] } =
      yield call(fetchTotalCountApi);

    const operatorAddons = responseOperatorAddons.data;
    const totalCount = responseTotalCount.data.length;

    yield put(fetchTotalCountSuccess(totalCount));
    yield put(saveOperatorAddons(operatorAddons));

    return operatorAddons;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    yield put(fetchTotalCountFailure(errorMessage));
    return null;
  }
}

function* fetchAndMergeOperatorsSaga(
  action: PayloadAction<{ page: number; limit: number }>,
) {
  try {
    const { page, limit } = action.payload;

    const responseOperators: { data: OperatorWithAddons[] } = yield call(
      fetchOperatorsApi,
      page,
      limit,
    );

    const operators = responseOperators.data;

    const operatorAddons: OperatorAddon[] = yield select(
      (state: RootState) => state.operator.operatorAddons,
    );

    let addons = operatorAddons;

    if (!addons.length) {
      addons = yield call(fetchInitialData);
    }

    const mergedOperators = operators.map((operator: OperatorWithAddons) => {
      const mergedAddons = addons.reduce(
        (
          acc: Record<string, string>,
          { fieldName, text }: { fieldName: string; text: string },
        ) => {
          return { ...acc, [fieldName]: text };
        },
        {},
      );

      return { ...operator, ...mergedAddons, page };
    });

    yield put(fetchOperatorsWithAddonsSuccess(mergedOperators));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    yield put(fetchOperatorsWithAddonsFailure(errorMessage));
  }
}

export function* watchFetchOperatorsWithAddons() {
  yield takeLatest(
    fetchOperatorsWithAddonsRequest.type,
    fetchAndMergeOperatorsSaga,
  );
}
