import React from "react";
import { Div } from "./styles";
import { ProfileHeader } from "../../components/ProfileHeader";
import { ProfilePicture } from "../../components/ProfilePicture";
export const Profile = () => {
  return (
    <Div>
      <ProfileHeader />
      <ProfilePicture />
    </Div>
  );
};
