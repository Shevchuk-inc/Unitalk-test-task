import { AppDispatch, RootState } from "@/store";
import { fetchOperatorsWithAddonsRequest } from "@/store/operators/slice";
import {
  Alert,
  Paper,
  Table,
  TableContainer,
  TablePagination,
} from "@mui/material";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "../Loader";
import { UserTableBody } from "./components/UserTableBody";
import { UserTableHeader } from "./components/UserTableHeader";

const UserTable: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, page, limit, totalCount } = useSelector(
    (state: RootState) => state.operator,
  );

  useEffect(() => {
    dispatch(fetchOperatorsWithAddonsRequest({ page: 0, limit }));
  }, []);

  const handlePageChange = (_: unknown, newPage: number) => {
    dispatch(fetchOperatorsWithAddonsRequest({ page: newPage, limit }));
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newLimit = parseInt(event.target.value, 10);
    dispatch(fetchOperatorsWithAddonsRequest({ page: 0, limit: newLimit }));
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Alert
        variant="filled"
        severity="error"
        sx={{ height: "fit-content", width: "100%" }}
      >
        {error}
      </Alert>
    );
  }

  return (
    <Paper>
      <TableContainer>
        <Table>
          <UserTableHeader />
          <UserTableBody />
        </Table>
      </TableContainer>
      <TablePagination
        page={page}
        component="div"
        count={totalCount}
        rowsPerPage={limit}
        onPageChange={handlePageChange}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Paper>
  );
};

export default UserTable;
