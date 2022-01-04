import styled from "styled-components";
import { ButtonPicture as ButtonPictureBase } from "../ButtonPicture";
import { H1 as H1Base } from "../H1";
import { RoundedIconButtonHOC } from "../IconButtonsHOCs/RoundedIconButton";
import { IconButtonHOC } from "../IconButtonsHOCs/IconButton";
import { MdFavorite, MdChatBubble } from "react-icons/md";
import { BiEdit, BiCog } from "react-icons/bi";

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

export const FavoriteButton = styled(RoundedIconButtonHOC(MdFavorite))`
  align-self: end;
  grid-column: 4 / 5;
  margin-bottom: 40px;
`;

export const ChatButton = styled(RoundedIconButtonHOC(MdChatBubble))`
  align-self: end;
  grid-column: 2 / 3;
  margin-bottom: 40px;
`;

export const EditButton = styled(IconButtonHOC(BiEdit))`
  margin-top: 15px;
  grid-column: 1 / 2;
`;

export const ConfigButton = styled(IconButtonHOC(BiCog))`
  margin-top: 15px;
  grid-column: 5 / 6;
`;
