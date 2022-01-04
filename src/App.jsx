import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};
