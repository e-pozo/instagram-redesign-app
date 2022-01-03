import React from "react";
import { Div } from "./styles";
import { ProfileHeader } from "../../components/ProfileHeader";
import { PostInfo } from "../../components/PostInfo";
export const Profile = () => {
  return (
    <Div>
      <ProfileHeader />
      <PostInfo />
    </Div>
  );
};
