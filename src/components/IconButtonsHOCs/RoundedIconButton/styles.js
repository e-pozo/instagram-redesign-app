import styled from "styled-components";
import { shadow, RED } from "../../../styles/ColorsShadowsAnimations";
export const Button = styled.button`
  border: none;
  border-radius: 50%;
  background: #fff;
  width: 40px;
  height: 40px;
  box-shadow: ${shadow("45deg", 5, 10)};
  position: relative;
  display: grid;
`;

export const Notification = styled.div`
  border: none;
  border-radius: 50%;
  width: 9px;
  height: 9px;
  background: ${RED};
  position: absolute;
  left: 30px;
`;
