import styled from "styled-components";
import {
  instagramGradient,
  shadow,
} from "../../styles/ColorsShadowsAnimations";
export const ButtonBase = styled.button`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border: none;
  border-radius: 50%;
  background: #fff;
  box-shadow: ${shadow("45deg", 5, 10)};
  ${(props) => (!props.decorated ? `padding: ${props.padding}` : "")}
`;

export const Decoration = styled.div`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
  background: ${instagramGradient(45)};
  margin: auto;
  padding: 2px;
`;

export const Img = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;
