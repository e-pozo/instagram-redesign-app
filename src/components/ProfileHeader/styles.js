import styled from "styled-components";
import { ProfilePicture as ProfilePictureBase } from "../ProfilePicture";
import { H1 as H1Base } from "../H1";
export const Div = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 30vh;
`;
export const ProfileMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-self: center;
  justify-content: center;
  grid-column: 3 / 4;
`;
export const H1 = styled(H1Base)`
  margin-top: 10px;
  text-align: center;
`;
export const ProfilePicture = styled(ProfilePictureBase)`
  margin: 0 auto;
`;
