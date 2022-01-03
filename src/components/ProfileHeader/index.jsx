import React from "react";
import {
  Div,
  ProfileMainContainer,
  H1,
  ProfilePicture,
  FavoriteButton,
  ChatButton,
  MdFavorite,
  MdChatBubble,
} from "./styles";
// import { BiEdit, BiCog } from "react-icons/bi";
export const ProfileHeader = () => {
  return (
    <Div>
      <ChatButton icon={<MdChatBubble />} notify={true} />
      <ProfileMainContainer>
        <ProfilePicture />
        <H1>Perrito Bonito mirando afuera</H1>
      </ProfileMainContainer>
      <FavoriteButton icon={<MdFavorite />} />
    </Div>
  );
};
