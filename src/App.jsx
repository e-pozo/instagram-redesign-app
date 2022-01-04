import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
// import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
// import { ButtonPicture } from "./components/ButtonPicture";
// import dogPicture from "@images/photo-1518155317743-a8ff43ea6a5f.jpeg";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
      {/* <Profile /> */}
    </>
  );
};
