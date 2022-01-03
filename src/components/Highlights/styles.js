import styled from "styled-components";
import { ButtonPicture as ButtonPictureBase } from "../ButtonPicture";
export const ScrollMenu = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
  min-height: 53px;
  height: 8vh;
  white-space: nowrap;
`;

export const CenterWrapper = styled.ul`
  display: inline-block;
  margin: 0 auto;
`;

export const HighlightContainer = styled.li`
  margin: 0 3px;
  width: 50px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  align-self: center;
`;

export const ButtonPicture = styled(ButtonPictureBase)`
  place-self: center;
`;
