import React from "react";
import { Div } from "./styles";
import { ProfileHeader } from "../../components/ProfileHeader";
import { ProfilePicture } from "../../components/ProfilePicture";
import { RoundedButton } from "../../components/RoundedButton";
export const Profile = () => {
  return (
    <Div>
      <ProfileHeader />
      <ProfilePicture />
      <RoundedButton />
    </Div>
  );
};
