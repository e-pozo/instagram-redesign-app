import React from "react";
import { Header, PersonButton, SearchButton } from "./styles";
import { Logo } from "../Logo";
export const HomeHeader = () => {
  return (
    <Header>
      <PersonButton />
      <Logo />
      <SearchButton />
    </Header>
  );
};
