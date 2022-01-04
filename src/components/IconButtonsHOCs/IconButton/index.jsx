import React from "react";
import { ButtonConstructor } from "./styles";
import { fitIcon } from "../commonStyles";
export const IconButtonHOC = (icon, color, isLink = false) => {
  const Icon = fitIcon({ icon, color });
  const Button = ButtonConstructor(isLink);
  return function IconButton({ className, onClick, to }) {
    return (
      <Button className={className} onClick={onClick} to={to}>
        <Icon />
      </Button>
    );
  };
};
