import React from "react";
import {
  Div,
  ProfileMainContainer,
  H1,
  ProfilePicture,
  FavoriteButton,
  ChatButton,
  EditButton,
  ConfigButton,
  MdFavorite,
  MdChatBubble,
  BiCog,
  BiEdit,
} from "./styles";

export const ProfileHeader = () => {
  return (
    <Div>
      <EditButton icon={<BiEdit />} />
      <ChatButton icon={<MdChatBubble />} notify={true} />
      <ProfileMainContainer>
        <ProfilePicture />
        <H1>Perrito Bonito mirando afuera</H1>
      </ProfileMainContainer>
      <FavoriteButton icon={<MdFavorite />} />
      <ConfigButton icon={<BiCog />} />
    </Div>
  );
};
