import { RootState } from "@/store";
import { OperatorWithAddons } from "@/store/operators/types";
import { stringAvatar } from "@/utils/helpers/stringToColor";
import {
  Avatar,
  Box,
  Checkbox,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { FC } from "react";
import { useSelector } from "react-redux";

const UserTableRow: FC<{ operator: OperatorWithAddons }> = ({ operator }) => {
  const { operatorAddons } = useSelector((state: RootState) => state.operator);

  return (
    <TableRow key={operator.id}>
      <TableCell>{operator.id}</TableCell>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar {...stringAvatar(operator.name)} />
          <Typography variant="body2">{operator.name}</Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Checkbox checked={operator.isWorking} />
      </TableCell>
      <TableCell>
        {dayjs(operator.createdAt).format("DD.MM.YYYY HH:mm")}
      </TableCell>

      {operatorAddons.map((addon) => (
        <TableCell key={addon.id}>{operator[addon.fieldName]}</TableCell>
      ))}
    </TableRow>
  );
};

export { UserTableRow };
