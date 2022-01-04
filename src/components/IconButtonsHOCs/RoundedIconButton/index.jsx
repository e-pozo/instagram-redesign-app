import React from "react";
import { Button, Notification } from "./styles";
import { fitIcon } from "../commonStyles";
import { GREY } from "../../../styles/ColorsShadowsAnimations";
export const RoundedIconButtonHOC = (icon, color = GREY) => {
  const Icon = fitIcon({ icon, size: "60%", color });
  return function RoundedIconButton({ className, onClick, notify }) {
    return (
      <Button className={className} onClick={onClick}>
        <Icon />
        {notify && <Notification />}
      </Button>
    );
  };
};
