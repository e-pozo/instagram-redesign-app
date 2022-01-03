import React from "react";
import { RoundedButton } from "../RoundedButton";
import { Flex, Img, HighlightContainer } from "./styles";
import highlightImg from "@images/category_dogs.jpg";
const Highlight = ({ src, topic }) => {
  return (
    <HighlightContainer>
      <RoundedButton>
        <Img src={src} />
      </RoundedButton>
      <p>{topic}</p>
    </HighlightContainer>
  );
};

export const Highlights = () => {
  return (
    <Flex>
      <Highlight src={highlightImg} topic="Shopping" />
      <Highlight src={highlightImg} topic="Life Style" />
      <Highlight src={highlightImg} topic="Trend ?!" />
      <Highlight src={highlightImg} topic="Travel" />
      <Highlight src={highlightImg} topic="My Dog" />
    </Flex>
  );
};
