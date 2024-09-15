import { styled } from "@mui/material";
import { AppBar, IconButton } from "@mui/material";

const StyledAppBar = styled(AppBar)`
  position: fixed;
`;

const StyledIconButton = styled(IconButton)`
  margin-right: ${(props) => props.theme.spacing(2)};
  display: block;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    display: none;
  }
`;

export { StyledAppBar, StyledIconButton };
