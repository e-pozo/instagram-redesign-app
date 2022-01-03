import React from "react";
import { Button } from "./styles";
export const TransparentButton = ({ icon, className, onClick }) => (
  <Button className={className} onClick={onClick}>
    {icon}
  </Button>
);
