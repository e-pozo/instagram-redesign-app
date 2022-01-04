import React from "react";
import { Button, Notification } from "./styles";
import { fitIcon } from "../commonStyles";
import { GREY } from "../../../styles/ColorsShadowsAnimations";
export const RoundedIconButtonHOC = (icon) => {
  const Icon = fitIcon(icon, "60%", GREY);
  return function RoundedIconButton({ className, onClick, notify }) {
    return (
      <Button className={className} onClick={onClick}>
        <Icon />
        {notify && <Notification />}
      </Button>
    );
  };
};
