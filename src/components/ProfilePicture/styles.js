import styled from "styled-components";
import {
  instagramGradient,
  shadow,
} from "../../styles/ColorsShadowsAnimations";
export const ButtonBase = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  background: #fff;
  box-shadow: ${shadow("45deg", 5, 10)};
  position: relative;
`;

export const Decoration = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: ${instagramGradient(45)};
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 2px;
`;

export const Img = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;
