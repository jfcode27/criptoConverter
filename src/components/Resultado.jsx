import React from "react";
import styled from "@emotion/styled";

const StyledResultado = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 30px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Resultado = ({ currency }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    currency;
  return (
    <StyledResultado>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio mas alto del dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio mas bajo del dia: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Varacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Ultima acttualizacion: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </StyledResultado>
  );
};

export default Resultado;
