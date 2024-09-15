import { OperatorAddon, OperatorWithAddons } from "@/store/operators/types";
import { BASE_API_URL } from "@/utils/constants/api";
import axios from "axios";

export const fetchOperatorsApi = (page: number, limit: number) => {
  return axios.get<{ data: OperatorWithAddons[] }>(
    `${BASE_API_URL}/operator?page=${page + 1}&limit=${limit}`,
  );
};

export const fetchOperatorAddonsApi = () => {
  return axios.get<{ data: OperatorAddon[] }>(`${BASE_API_URL}/operatorAddon`);
};

export const fetchTotalCountApi = () => {
  return axios.get<{ data: OperatorWithAddons[] }>(`${BASE_API_URL}/operator`);
};
