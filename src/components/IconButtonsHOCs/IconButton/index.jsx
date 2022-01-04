import React from "react";
import { Button } from "./styles";
import { fitIcon } from "../commonStyles";
export const IconButtonHOC = (icon, color) => {
  const Icon = fitIcon({ icon, color });
  return function IconButton({ className, onClick }) {
    return (
      <Button className={className} onClick={onClick}>
        <Icon />
      </Button>
    );
  };
};
