import { ReactComponent as LogoSmIcon } from "@/assets/icons/logo.sm.svg";
import { ReactComponent as LogoIcon } from "@/assets/icons/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { FC } from "react";

import { IDrawerList, drawerListItems } from ".";

const DrawerList: FC<IDrawerList> = ({ variant }) => {
  switch (variant) {
    case "collapsed":
      return (
        <Box sx={{ my: 10, mx: 2 }}>
          <Box sx={{ mb: 2 }}>
            <LogoSmIcon />
          </Box>
          <SearchIcon />
          <List>
            {drawerListItems.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{ px: 0 }}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

    case "expanded": {
      return (
        <Box sx={{ my: 10, mx: 2 }}>
          <Box sx={{ mb: 2 }}>
            <LogoIcon />
          </Box>
          <TextField
            size="small"
            sx={{ mb: 2 }}
            id="outlined-basic"
            variant="outlined"
            label="Placeholder"
          />
          <List>
            {drawerListItems.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    }

    default:
      return null;
  }
};

export { DrawerList };
