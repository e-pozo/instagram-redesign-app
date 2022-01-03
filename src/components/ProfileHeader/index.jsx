import React from "react";
import {
  Div,
  ProfileMainContainer,
  H1,
  ButtonPicture,
  FavoriteButton,
  ChatButton,
  EditButton,
  ConfigButton,
  MdFavorite,
  MdChatBubble,
  BiCog,
  BiEdit,
} from "./styles";
import dogPicture from "@images/photo-1518155317743-a8ff43ea6a5f.jpeg";

export const ProfileHeader = () => {
  return (
    <Div>
      <EditButton icon={<BiEdit />} />
      <ChatButton icon={<MdChatBubble />} notify={true} />
      <ProfileMainContainer>
        <ButtonPicture decorated={true} size={100} src={dogPicture} />
        <H1>Perrito Bonito mirando afuera</H1>
      </ProfileMainContainer>
      <FavoriteButton icon={<MdFavorite />} />
      <ConfigButton icon={<BiCog />} />
    </Div>
  );
};
