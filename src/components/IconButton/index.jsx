import React from "react";
import { Button, fitIcon } from "./styles";
export const IconButtonHOC = (icon) => {
  const Icon = fitIcon(icon);
  return function IconButton({ className, onClick }) {
    return (
      <Button className={className} onClick={onClick}>
        <Icon />
      </Button>
    );
  };
};
