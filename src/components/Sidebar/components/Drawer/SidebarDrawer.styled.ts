import { drawerWidth, drawerWidthSm } from "@/utils/constants";
import { styled } from "@mui/material";
import { Drawer } from "@mui/material";

export const StyledDrawer = styled(Drawer)`
  & .MuiDrawer-paper {
    box-sizing: border-box;
  }
`;

export const getDrawerWidthStyles = (breakpoint: string) => {
  switch (breakpoint) {
    case "sm":
      return {
        width: "100%",
      };
    case "md":
      return {
        "& .MuiDrawer-paper": {
          width: `${drawerWidthSm}px`,
        },
      };
    case "lg":
    case "xl":
      return {
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
        },
      };
    default:
      return {};
  }
};
