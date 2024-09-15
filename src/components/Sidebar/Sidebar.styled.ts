import { drawerWidth, drawerWidthSm } from "@/utils/constants";
import { styled } from "@mui/material";
import { Box, BoxProps } from "@mui/material";

const StyledNavBox = styled(Box)<BoxProps>`
  z-index: 0;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    width: ${drawerWidthSm}px;
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    width: ${drawerWidth}px;
  }
`;

export { StyledNavBox };
