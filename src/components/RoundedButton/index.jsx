import React from "react";
import { Button, Notification } from "./styles";
export const RoundedButton = ({ className, icon, notify, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      {icon}
      {notify && <Notification />}
    </Button>
  );
};
