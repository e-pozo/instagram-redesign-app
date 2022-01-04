import styled from "styled-components";
import { BLACK } from "../../styles/ColorsShadowsAnimations";

export const Button = styled.button`
  border: none;
  background: rgba(0, 0, 0, 0);
  width: 20px;
  height: 20px;
  display: grid;
  justify-self: center;
  margin-top: 15px;
`;

export const fitIcon = (icon, size = "100%", color = BLACK) => styled(icon)`
  width: ${size};
  height: ${size};
  place-self: center;
  color: ${color};
`;
