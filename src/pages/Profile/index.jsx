import React from "react";
import { Div } from "./styles";
import { ProfileHeader } from "../../components/ProfileHeader";
import { PostInfo } from "../../components/PostInfo";
import { Highlights } from "../../components/Highlights";
export const Profile = () => {
  return (
    <Div>
      <ProfileHeader />
      <PostInfo />
      <Highlights />
    </Div>
  );
};
