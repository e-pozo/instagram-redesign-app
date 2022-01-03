import React from "react";
import { ProfileHeader } from "../../components/ProfileHeader";
import { PostInfo } from "../../components/PostInfo";
import { Highlights } from "../../components/Highlights";
import { PhotoGrid } from "../../components/PhotosGrid";
import { SPALayout } from "../SPAScroll";
export const Profile = () => {
  return (
    <SPALayout>
      <ProfileHeader />
      <PostInfo />
      <Highlights />
      <PhotoGrid />
    </SPALayout>
  );
};
