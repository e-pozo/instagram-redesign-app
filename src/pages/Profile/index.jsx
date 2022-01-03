import React from "react";
import { Div } from "./styles";
import { ProfileHeader } from "../../components/ProfileHeader";
import { PostInfo } from "../../components/PostInfo";
import { Highlights } from "../../components/Highlights";
import { PhotoGrid } from "../../components/PhotosGrid";
export const Profile = () => {
  return (
    <Div>
      <ProfileHeader />
      <PostInfo />
      <Highlights />
      <PhotoGrid />
    </Div>
  );
};
