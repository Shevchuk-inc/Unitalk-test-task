import { useBreakpoint } from "@/hooks/useBreakpoint";
import { FC } from "react";

import { SidebarDrawerProps } from ".";
import { DrawerList } from "../DrawerList";
import { StyledDrawer, getDrawerWidthStyles } from "./SidebarDrawer.styled";

const SidebarDrawer: FC<SidebarDrawerProps> = (props) => {
  const { window, mobileOpen, setIsClosing, setMobileOpen } = props;
  const breakpoint = useBreakpoint();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const drawerWidthStyles = getDrawerWidthStyles(breakpoint);

  switch (breakpoint) {
    case "sm":
      return (
        <StyledDrawer
          open={mobileOpen}
          variant="temporary"
          container={container}
          sx={drawerWidthStyles}
          onClose={handleDrawerClose}
          ModalProps={{ keepMounted: true }}
          onTransitionEnd={handleDrawerTransitionEnd}
        >
          <DrawerList variant="expanded" />
        </StyledDrawer>
      );

    case "md":
      return (
        <StyledDrawer variant="permanent" sx={drawerWidthStyles} open>
          <DrawerList variant="collapsed" />
        </StyledDrawer>
      );

    case "lg":
    case "xl":
      return (
        <StyledDrawer variant="permanent" sx={drawerWidthStyles} open>
          <DrawerList variant="expanded" />
        </StyledDrawer>
      );

    default:
      return null;
  }
};

export { SidebarDrawer };
