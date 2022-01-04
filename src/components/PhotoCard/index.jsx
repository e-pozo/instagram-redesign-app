import React from "react";
import {
  Img,
  ProfilePicture,
  ButtonActions,
  Card,
  Legend,
  ChatButton,
  FavoriteButton,
  SendButton,
  BookmarkButton,
  UserDescriptor,
  Span,
} from "./styles";
import dogPhoto from "@images/photo-1520561805070-83c413349512.jpeg";
import dogPhotoProfile from "@images/category_dogs.jpg";
export const PhotoCard = () => {
  return (
    <Card>
      <Legend>
        <UserDescriptor>
          <ProfilePicture src={dogPhotoProfile} />
          <Span>
            {" "}
            <b>El Dogo</b> - Perrito sentado de pana
          </Span>
        </UserDescriptor>
        <BookmarkButton />
      </Legend>
      <Img src={dogPhoto} />
      <ButtonActions>
        <ChatButton />
        <FavoriteButton />
        <SendButton />
      </ButtonActions>
    </Card>
  );
};
