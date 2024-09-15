import { drawerWidth, drawerWidthSm } from "@/utils/constants";
import { Box, styled } from "@mui/material";
import { BoxProps } from "@mui/system";

const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  overflow: "scroll",
  padding: theme.spacing(3),
  marginTop: theme.spacing(8),

  [theme.breakpoints.up("xs")]: {
    width: `calc(100% - ${drawerWidth}px)`,
  },

  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidthSm}px)`,
  },

  [theme.breakpoints.up("md")]: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
}));

export { Wrapper };
