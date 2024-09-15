import { RootState } from "@/store";
import { TableCell, TableHead, TableRow } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";

const UserTableHeader: FC = () => {
  const { operatorAddons } = useSelector((state: RootState) => state.operator);

  return (
    <TableHead>
      <TableRow>
        <TableCell>#</TableCell>
        <TableCell>Користувач</TableCell>
        <TableCell>Працює</TableCell>
        <TableCell>Дата доєднання</TableCell>

        {operatorAddons.map((addon) => (
          <TableCell key={addon.id}>{addon.fieldName}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export { UserTableHeader };
