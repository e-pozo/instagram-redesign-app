import React from "react";
import { Button, Notification } from "./styles";
export const RoundedButton = ({ className, icon, notify }) => {
  return (
    <Button className={className}>
      {icon}
      {notify && <Notification />}
    </Button>
  );
};
