import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColors {
    _states?: {
      selected?: string;
    };
  }

  interface CommonColors {
    white_states?: {
      main?: string;
    };
  }

  interface PaletteOptions {
    primary?: Partial<PaletteColors>;
    common?: Partial<CommonColors>;
  }
}
