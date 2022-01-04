import styled from "styled-components";
import { BLACK } from "../../styles/ColorsShadowsAnimations";

export const Button = styled.button`
  border: none;
  background: rgba(0, 0, 0, 0);
  width: 25px;
  height: 25px;
  display: grid;
  justify-self: center;
`;

export const fitIcon = (icon, size = "100%", color = BLACK) => styled(icon)`
  width: ${size};
  height: ${size};
  place-self: center;
  color: ${color};
`;
