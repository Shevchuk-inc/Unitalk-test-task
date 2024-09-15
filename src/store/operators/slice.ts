import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  OPERATORS,
  OperatorAddon,
  OperatorWithAddons,
  OperatorsState,
} from "./types";

const initialState: OperatorsState = {
  operatorsWithAddons: [],
  loading: false,
  error: null,
  page: 0,
  limit: 5,
  totalCount: 0,
  loadingTotalCount: false,
  addonsLoaded: false,
  operatorAddons: [],
};

export const operatorsSlice = createSlice({
  name: OPERATORS,
  initialState,
  reducers: {
    fetchOperatorsWithAddonsRequest(
      state: OperatorsState,
      action: PayloadAction<{ page: number; limit: number }>,
    ) {
      state.loading = true;
      state.page = action.payload.page;
      state.limit = action.payload.limit;
      state.error = null;
    },
    fetchOperatorsWithAddonsSuccess(
      state: OperatorsState,
      action: PayloadAction<OperatorWithAddons[]>,
    ) {
      state.operatorsWithAddons = action.payload;
      state.loading = false;
    },
    fetchOperatorsWithAddonsFailure(
      state: OperatorsState,
      action: PayloadAction<string>,
    ) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchTotalCountRequest(state) {
      state.loadingTotalCount = true;
    },
    fetchTotalCountSuccess(state, action: PayloadAction<number>) {
      state.totalCount = action.payload;
      state.loadingTotalCount = false;
    },
    fetchTotalCountFailure(state, action: PayloadAction<string>) {
      state.loadingTotalCount = false;
      state.error = action.payload;
    },
    saveOperatorAddons(state, action: PayloadAction<OperatorAddon[]>) {
      state.operatorAddons = action.payload;
    },
  },
});

export const selectOperatorState = (state: { operator: OperatorsState }) =>
  state.operator;

export const {
  fetchOperatorsWithAddonsRequest,
  fetchOperatorsWithAddonsSuccess,
  fetchOperatorsWithAddonsFailure,
  fetchTotalCountRequest,
  fetchTotalCountSuccess,
  fetchTotalCountFailure,
  saveOperatorAddons,
} = operatorsSlice.actions;

export default operatorsSlice.reducer;
