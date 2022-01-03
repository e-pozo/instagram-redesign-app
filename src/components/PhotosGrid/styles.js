import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  /* width: 100%; */
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4px;
  margin: 0 4px;
  margin-top: 7px;
`;

export const Img = styled.img`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
  object-fit: cover;
`;
