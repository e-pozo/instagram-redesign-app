import React from "react";
import { ButtonBase, Decoration, Img } from "./styles";
import dogPicture from "@images/photo-1518155317743-a8ff43ea6a5f.jpeg";
export const ProfilePicture = ({ className }) => {
  return (
    <ButtonBase className={className} onClick={() => console.log("CLICK!!")}>
      <Decoration>
        <Img src={dogPicture} />
      </Decoration>
    </ButtonBase>
  );
};
