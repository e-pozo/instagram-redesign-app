import styled from "styled-components";
import { ProfilePicture as ProfilePictureBase } from "../ProfilePicture";
export const Div = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 25vh;
`;

export const ProfilePicture = styled(ProfilePictureBase)`
  place-self: center;
`;
