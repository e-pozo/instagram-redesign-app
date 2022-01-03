import styled from "styled-components";
import { ProfilePicture as ProfilePictureBase } from "../ProfilePicture";
import { H1 as H1Base } from "../H1";
import { RoundedButton as RoundedButtonBase } from "../RoundedButton";
import { TransparentButton } from "../TransparentButton";
import {
  MdFavorite as MdFavoriteBase,
  MdChatBubble as MdChatBubbleBase,
} from "react-icons/md";
import { BiEdit as BiEditBase, BiCog as BiCogBase } from "react-icons/bi";

import { BLACK, GREY } from "../../styles/ColorsShadowsAnimations";
export const Div = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 4fr 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 30vh;
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
`;
export const ProfilePicture = styled(ProfilePictureBase)`
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
export const BiCog = styled(BiCogBase)`
  ${IconCenter("100%")}
  color: ${BLACK};
`;

export const BiEdit = styled(BiEditBase)`
  ${IconCenter("100%")}
  color: ${BLACK}
`;

export const EditButton = styled(TransparentButton)`
  grid-column: 1 / 2;
`;

export const ConfigButton = styled(TransparentButton)`
  grid-column: 5 / 6;
`;
