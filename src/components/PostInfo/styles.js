import styled from "styled-components";
import { GREY } from "../../styles/ColorsShadowsAnimations";

export const Flex = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: space-evenly;
`;

export const Number = styled.h2`
  font-size: 1.2rem;
`;

export const Subject = styled.h2`
  font-size: 1.2rem;
  color: ${GREY};
`;

export const StatsContainer = styled.div`
  height: 100%;
  width: 50px;
  text-align: center;
`;
