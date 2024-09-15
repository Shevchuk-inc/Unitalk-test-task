import { createTheme } from "@mui/material/styles";

import { colors } from "../utils/constants/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary.main,
    },
    secondary: {
      main: colors.secondary.main,
    },
    error: {
      main: colors.error.main,
    },
    warning: {
      main: colors.warning.main,
    },
    info: {
      main: colors.info.main,
    },
    text: {
      primary: colors.text.primary,
    },
    action: {
      hover: colors.action.hover,
    },
    common: {
      white_states: {
        main: colors.common.white_states.main,
      },
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h3: {
      fontWeight: 400,
      fontSize: "48px",
      lineHeight: "56px",
      color: colors.text.primary,
    },
    h4: {
      fontWeight: 400,
      fontSize: "34px",
      lineHeight: "42px",
      color: colors.text.primary,
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.15px",
      color: colors.text.primary,
    },
    body2: {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.17px",
      color: colors.text.primary,
    },
  },
  breakpoints: {
    values: {
      xs: 375,
      sm: 720,
      md: 1024,
      lg: 1920,
      xl: 2048,
    },
  },
  spacing: 8,
});

export default theme;
