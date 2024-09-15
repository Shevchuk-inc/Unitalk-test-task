import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useBreakpoint = () => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isXl = useMediaQuery(theme.breakpoints.down("xl"));

  if (isXs) return "xs";
  if (isSm) return "sm";
  if (isMd) return "md";
  if (isLg) return "lg";
  if (isXl) return "xl";
  return "xl";
};
