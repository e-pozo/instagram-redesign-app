import styled from "styled-components";
import { GREY, shadow } from "../../styles/ColorsShadowsAnimations";

export const Flex = styled.div`
  width: 80%;
  height: 6vh;
  min-height: 40px;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  box-shadow: ${shadow("45deg", 5, 10)};
  border-radius: 5px;
`;

export const Number = styled.h2`
  font-size: 1.2rem;
`;

export const Subject = styled.h2`
  font-size: 1.2rem;
  color: ${GREY};
`;

export const StatsContainer = styled.div`
  width: 50px;
  text-align: center;
  margin: auto 0;
`;
