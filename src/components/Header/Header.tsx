import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { FC } from "react";

import { HeaderProps } from ".";
import { StyledAppBar, StyledIconButton } from "./Header.styled";

const Header: FC<HeaderProps> = ({ onMenuClick }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar>
      <Toolbar>
        <StyledIconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuClick}
        >
          <MenuIcon />
        </StyledIconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }} component="div">
          Typography
        </Typography>

        <div>
          <IconButton
            size="large"
            color="inherit"
            aria-haspopup="true"
            onClick={handleMenu}
            aria-controls="menu-appbar"
            aria-label="account of current user"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

export { Header };
