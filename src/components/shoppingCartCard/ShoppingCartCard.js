import React from "react";
import styled from "styled-components";
import { Spacer } from "../../style/styledComponent";
import { darkPrimaryColor, lightWhiteShade } from "../../constants/constants";
import Checkbox from "../../components/checkBox/Checkbox";

const ShoppingCartCard = ({
  productImg,
  alt,
  title,
  price,
  productsInStock,
}) => {
  let inStock = "3";

  return (
    <Container>
      <CheckBoxImageContainer>
        <Checkbox />
        <Spacer width="5" />
        <Image src={productImg} alt={alt} />
      </CheckBoxImageContainer>
      <Spacer width="10" height="5" />
      <Div>
        <TitleContainer>
          <h1>{title}</h1>
          <Spacer width="5" />
          <h2>₹{price}</h2>
        </TitleContainer>
        <Spacer height="2" />
        {productsInStock <= inStock ? (
          <p style={{ color: "red" }}>Only {productsInStock} left in Stock</p>
        ) : (
          <p style={{ color: "green" }}>In Stock</p>
        )}
      </Div>
    </Container>
  );
};

export default ShoppingCartCard;

const Container = styled.div`
  background-color: ${lightWhiteShade};
  display: flex;
  justify-content: center;
  padding: 1.5rem 5rem;
  width: 70%;
  margin: 1.5rem auto;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;

const CheckBoxImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 15rem;
  border-radius: 1rem;
`;
const Div = styled.div``;

const TitleContainer = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  h1 {
    color: ${darkPrimaryColor};
  }

  h2 {
    font-weight: bold;
    line-height: 3rem;
  }
`;
