import React from "react";
import {
  Div,
  ProfileMainContainer,
  H1,
  ButtonPicture,
  FavoriteButton,
  ChatButton,
  BackButton,
  ConfigButton,
} from "./styles";
import dogPicture from "@images/photo-1518155317743-a8ff43ea6a5f.jpeg";

export const ProfileHeader = () => {
  return (
    <Div>
      <BackButton to="/" />
      <ChatButton notify={true} />
      <ProfileMainContainer>
        <ButtonPicture decorated={true} size={100} src={dogPicture} />
        <H1>Perrito Bonito mirando afuera</H1>
      </ProfileMainContainer>
      <FavoriteButton />
      <ConfigButton />
    </Div>
  );
};
