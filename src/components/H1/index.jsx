import React from "react";
import { StyledH1 } from "./styles";
export const H1 = ({ className, children }) => (
  <StyledH1 className={className}>{children}</StyledH1>
);
