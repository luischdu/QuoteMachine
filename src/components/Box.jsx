import React, { useState } from "react";
import styled from "styled-components";
import { useFetch } from "../Hooks/useFetch.jsx";
import color from "../Styled/Colores.jsx";

const BoxStyled = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  z-index: 2;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin: 8% auto;
  width: 50vw;
  padding: 40px 50px;
  background-color: white;
`;

const PCitaStyled = styled.p`
  color: ${color};
  font-size: 300%;
`;

const PAutorStyled = styled.p`
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 2vw;
  font-style: italic;
  text-align: right;
  color: ${color};
`;

const DivButStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonStyled = styled.button`
  width: 12vw;
  height: 5vw;
  border-radius: 15px;
  background-color: ${color};
  border: none;
  color: #fff;
  font-size: 1.4rem;
  :hover {
    background-color: #fff;
    color: ${color};
    border: solid 2px ${color};
  }
`;

const PStyled = styled.p`
  width: 450px;
  text-align: center;
  margin: 10px auto;
  font-size: 0.8em;
  color: #fff;
`;

const AStyled = styled.a`
  font-weight: 500;
  font-size: 1.5em;
  text-decoration: none;
  color: #fff;
  :hover {
    color: purple;
  }
`;
const AIconStyled = styled.a`
  font-weight: 500;
  size: 20px;
  text-decoration: none;
  color: ${color};
`;
const Box = () => {
  const [state, setState] = useState(1);
  const incremento = () => {
    setState(Math.floor(Math.random() * 102));
  };

  console.log(incremento);

  const { data, loading } = useFetch(
    `https://api-quote-machine.herokuapp.com/citas/${state}`
  );
  const { cita, autor } = !!data && data;

  return (
    <div>
      {loading ? (
        <div onLoad={() => loading} className="alert alert-info text-center">
          loading...
        </div>
      ) : (
        <div>
          <BoxStyled>
            <PCitaStyled>
              <i className="fas fa-quote-left"> </i>
              <span> </span>
              {cita}
              <span> </span>
              <i className="fas fa-quote-right"></i>
            </PCitaStyled>
            <PAutorStyled id="author"> - {autor}</PAutorStyled>
            <DivButStyled className="interaccion-container">
              <a
                href={`https://twitter.com/intent/tweet/?text="${cita}" -${autor}&hashtags=citaDeldía`}
              >
                <AIconStyled className="fab fa-twitter-square"></AIconStyled>
              </a>
              <ButtonStyled id="new-quote" onClick={() => incremento()}>
                Nueva cita
              </ButtonStyled>
            </DivButStyled>
          </BoxStyled>
          <PStyled>
            by <AStyled href="https://github.com/luischdu">luischdu</AStyled>
          </PStyled>
        </div>
      )}
    </div>
  );
};

export default Box;
