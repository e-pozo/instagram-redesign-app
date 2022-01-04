import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Home /> */}
      <Profile />
    </>
  );
};
