import styled from "styled-components";
import { ButtonPicture as ButtonPictureBase } from "../ButtonPicture";
import { H1 as H1Base } from "../H1";
import { RoundedButton as RoundedButtonBase } from "../RoundedButton";
import { IconButtonHOC } from "../IconButton";
import {
  MdFavorite as MdFavoriteBase,
  MdChatBubble as MdChatBubbleBase,
} from "react-icons/md";
import { BiEdit, BiCog } from "react-icons/bi";

import { GREY } from "../../styles/ColorsShadowsAnimations";
export const Div = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 4fr 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 30vh;
  min-height: 200px;
`;
export const ProfileMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-self: center;
  justify-content: center;
  grid-column: 3 / 4;
`;
export const H1 = styled(H1Base)`
  margin-top: 10px;
  text-align: center;
  padding: 0 10px;
`;
export const ButtonPicture = styled(ButtonPictureBase)`
  margin: 0 auto;
`;

const RoundedButton = styled(RoundedButtonBase)`
  align-self: end;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  margin-bottom: 40px;
`;

export const FavoriteButton = styled(RoundedButton)`
  grid-column: 4 / 5;
`;

export const ChatButton = styled(RoundedButton)`
  grid-column: 2 / 3;
`;

const IconCenter = (size) => `
  width: ${size};
  height: ${size};
  place-self: center;
`;

export const MdFavorite = styled(MdFavoriteBase)`
  ${IconCenter("60%")}
  color: ${GREY}
`;
export const MdChatBubble = styled(MdChatBubbleBase)`
  ${IconCenter("60%")}
  color: ${GREY}
`;

export const EditButton = styled(IconButtonHOC(BiEdit))`
  grid-column: 1 / 2;
`;

export const ConfigButton = styled(IconButtonHOC(BiCog))`
  grid-column: 5 / 6;
`;
