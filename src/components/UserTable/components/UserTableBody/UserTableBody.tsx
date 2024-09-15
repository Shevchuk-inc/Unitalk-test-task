import { RootState } from "@/store";
import { TableBody } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";

import { UserTableRow } from "../UserTableRow";

const UserTableBody: FC = () => {
  const { operatorsWithAddons } = useSelector(
    (state: RootState) => state.operator,
  );

  return (
    <TableBody>
      {operatorsWithAddons.length > 0 &&
        operatorsWithAddons.map((operator) => (
          <UserTableRow key={operator.id} operator={operator} />
        ))}
    </TableBody>
  );
};

export { UserTableBody };
