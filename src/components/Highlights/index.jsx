import React from "react";
import {
  ScrollMenu,
  ButtonPicture,
  HighlightContainer,
  CenterWrapper,
} from "./styles";
import highlightImg from "@images/category_dogs.jpg";
const Highlight = ({ src, topic }) => {
  return (
    <HighlightContainer>
      <ButtonPicture decorated={false} size={40} src={src} />
      <p>{topic}</p>
    </HighlightContainer>
  );
};

export const Highlights = () => {
  return (
    <ScrollMenu>
      <CenterWrapper>
        <Highlight src={highlightImg} topic="Shopping" />
        <Highlight src={highlightImg} topic="Life Style" />
        <Highlight src={highlightImg} topic="Trend ?!" />
        <Highlight src={highlightImg} topic="Travel" />
        <Highlight src={highlightImg} topic="My Dog" />
        <Highlight src={highlightImg} topic="My Dog" />
        <Highlight src={highlightImg} topic="My Dog" />
        <Highlight src={highlightImg} topic="My Dog" />
        <Highlight src={highlightImg} topic="My Dog" />
        <Highlight src={highlightImg} topic="My Dog" />
      </CenterWrapper>
    </ScrollMenu>
  );
};
