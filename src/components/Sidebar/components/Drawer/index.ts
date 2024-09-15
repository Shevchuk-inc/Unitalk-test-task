export { SidebarDrawer } from "./SidebarDrawer";

export interface SidebarDrawerProps {
  mobileOpen: boolean;
  window?: () => Window;
  setIsClosing: (value: boolean) => void;
  setMobileOpen: (value: boolean) => void;
}
