import React from "react";
import { Div, ProfileMainContainer, H1, ProfilePicture } from "./styles";
export const ProfileHeader = () => {
  return (
    <Div>
      <ProfileMainContainer>
        <ProfilePicture />
        <H1>Perrito Bonito mirando afuera</H1>
      </ProfileMainContainer>
    </Div>
  );
};
