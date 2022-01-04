import styled from "styled-components";
import {
  BLUE,
  GREEN,
  RED,
  ORANGE,
  shadow,
} from "../../styles/ColorsShadowsAnimations";
import {
  IoChatbubbleOutline,
  IoHeartOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
} from "react-icons/io5";
import { RoundedIconButtonHOC } from "../IconButtonsHOCs/RoundedIconButton";
import { IconButtonHOC } from "../IconButtonsHOCs/IconButton";
export const Card = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ButtonActions = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin-top: 10px;
`;

export const Legend = styled.div`
  display: grid;
  grid-template-columns: 7fr 1fr;
  max-width: calc(100% - 10px);
  min-width: 310px;
  height: 30px;
  border-radius: 5px;
  box-shadow: ${shadow("45deg", 5, 10)};
  margin: 7px 0;
  padding-left: 7px;
`;

export const UserDescriptor = styled.div`
  display: flex;
  align-items: center;
`;

export const Span = styled.p`
  display: inline-block;
  font-size: 1.4rem;
  margin-left: 10px;
`;

export const ProfilePicture = styled.img`
  width: 27px;
  border-radius: 50%;
  aspect-ratio: 1;
  object-fit: cover;
  position: inline-block;
`;

export const BookmarkButton = styled(IconButtonHOC(IoBookmarkOutline, ORANGE))`
  margin: auto;
`;
export const ChatButton = RoundedIconButtonHOC(IoChatbubbleOutline, GREEN);
export const FavoriteButton = RoundedIconButtonHOC(IoHeartOutline, RED);
export const SendButton = RoundedIconButtonHOC(IoPaperPlaneOutline, BLUE);
