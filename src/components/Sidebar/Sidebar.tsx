import { FC, useState } from "react";

import { Header } from "../Header";
import { StyledNavBox } from "./Sidebar.styled";
import { SidebarDrawer } from "./components/Drawer";

const Sidebar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <>
      <Header onMenuClick={handleDrawerToggle} />
      <StyledNavBox component="nav">
        <SidebarDrawer
          mobileOpen={mobileOpen}
          setIsClosing={setIsClosing}
          setMobileOpen={setMobileOpen}
        />
      </StyledNavBox>
    </>
  );
};

export { Sidebar };
