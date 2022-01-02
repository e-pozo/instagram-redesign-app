import styled from "styled-components";
import { instagramGradient } from "../../styles/colors";
export const ButtonBase = styled.button`
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  background: #e0e0e0;
  box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
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
