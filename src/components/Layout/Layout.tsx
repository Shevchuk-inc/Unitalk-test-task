import { Box } from "@mui/material";
import { FC } from "react";

import { LayoutProps } from ".";
import { Sidebar } from "../Sidebar";
import { Wrapper } from "./Layout.styled";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Wrapper component="main">{children}</Wrapper>
    </Box>
  );
};

export { Layout };
