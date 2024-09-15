export interface Operator {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
  isWorking: boolean;
}

export interface OperatorAddon {
  id: string;
  text: string;
  fieldName: string;
  isChecked: boolean;
}

export interface OperatorWithAddons extends Operator {
  [key: string]: string | boolean;
}

export interface OperatorsState {
  page: number;
  limit: number;
  loading: boolean;
  totalCount: number;
  error: string | null;
  addonsLoaded: boolean;
  loadingTotalCount: boolean;
  operatorAddons: OperatorAddon[];
  operatorsWithAddons: OperatorWithAddons[];
}

export const OPERATORS = "operators";
export type OPERATORS = typeof OPERATORS;

export const OPERATOR_ADDONS = "operatorAddons";
export type OPERATOR_ADDONS = typeof OPERATOR_ADDONS;
