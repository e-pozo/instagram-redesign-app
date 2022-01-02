import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Profile } from "./pages/Profile";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile />
    </>
  );
};
