import styled from "styled-components";
import { IconButtonHOC } from "../IconButton";
import { MdPersonOutline, MdOutlineSearch } from "react-icons/md";

export const Header = styled.section`
  display: flex;
  min-height: 50px;
  height: 8vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const PersonButton = IconButtonHOC(MdPersonOutline);

export const SearchButton = IconButtonHOC(MdOutlineSearch);
