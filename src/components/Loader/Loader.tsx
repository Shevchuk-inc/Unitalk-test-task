import { CircularProgress } from "@mui/material";
import { FC } from "react";

import { LoaderWrapper } from "./Loader.styled";

const Loader: FC = () => (
  <LoaderWrapper>
    <CircularProgress />
  </LoaderWrapper>
);

export { Loader };
