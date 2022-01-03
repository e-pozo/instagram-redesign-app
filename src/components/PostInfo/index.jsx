import React from "react";
import { Flex, Number, StatsContainer, Subject } from "./styles";
const Stat = ({ amount, subject }) => (
  <StatsContainer>
    <Number>{amount}</Number>
    <Subject>{subject}</Subject>
  </StatsContainer>
);
export const PostInfo = () => {
  return (
    <Flex>
      <Stat subject="Posts" amount="524" />
      <Stat subject="Followers" amount="124K" />
      <Stat subject="Following" amount="248" />
    </Flex>
  );
};
