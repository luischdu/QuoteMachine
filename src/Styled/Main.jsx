import React from "react";
import styled from "styled-components";
import color from "../Styled/Colores.jsx";

const MainStyled = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${color};
`;

const Main = ({ children }) => {
  return <MainStyled>{children}</MainStyled>;
};
export default Main;
