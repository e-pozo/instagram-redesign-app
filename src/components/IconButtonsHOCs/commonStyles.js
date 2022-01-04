import styled from "styled-components";
import { BLACK } from "../../styles/ColorsShadowsAnimations";

export const fitIcon = (icon, size = "100%", color = BLACK) => styled(icon)`
  width: ${size};
  height: ${size};
  place-self: center;
  color: ${color};
`;
