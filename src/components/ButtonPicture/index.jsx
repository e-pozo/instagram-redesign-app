import React from "react";
import { ButtonBase, Decoration, Img } from "./styles";
export const ButtonPicture = ({
  className,
  src,
  decorated,
  size = 100,
  padding = "3px",
}) => {
  return (
    <ButtonBase
      className={className}
      onClick={() => console.log("CLICK!!")}
      decorated={decorated}
      size={size}
      padding={padding}
    >
      {decorated ? (
        <Decoration size={0.9 * size}>
          <Img src={src} />
        </Decoration>
      ) : (
        <Img src={src} />
      )}
    </ButtonBase>
  );
};
