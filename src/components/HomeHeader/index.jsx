import React from "react";
import { Header } from "./styles";
import { IconButtonHOC } from "../IconButton";
import { MdPersonOutline, MdOutlineSearch } from "react-icons/md";
const PersonButton = IconButtonHOC(MdPersonOutline);
const SearchButton = IconButtonHOC(MdOutlineSearch);

export const HomeHeader = () => {
  return (
    <Header>
      <PersonButton />
      <SearchButton />
    </Header>
  );
};
