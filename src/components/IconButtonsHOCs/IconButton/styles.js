import styled from "styled-components";
import { Link } from "react-router-dom";
export const ButtonConstructor = (isLink) => {
  const style = `
  border: none;
  background: rgba(0, 0, 0, 0);
  width: 25px;
  height: 25px;
  display: grid;
  justify-self: center;
`;

  return isLink
    ? styled(Link)`
        ${style}
      `
    : styled.button`
        ${style}
      `;
};
