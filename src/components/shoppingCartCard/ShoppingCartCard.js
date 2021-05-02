import React, { useState } from "react";
import styled from "styled-components";
import { Spacer } from "../../style/styledComponent";
import {
  darkGray,
  whiteShade,
  darkPrimaryColor,
  lightWhiteShade,
} from "../../constants/constants";
import { Button } from "./../button/Button";

const ShoppingCartCard = ({
  productImg,
  alt,
  title,
  price,
  productsInStock,
}) => {
  let inStock = "3";

  const [numberOfItems, setNumberOfItems] = useState(1);

  const increament = () => {
    if (numberOfItems < 10) {
      setNumberOfItems(numberOfItems + 1);
    }
  };

  const decreament = () => {
    if (numberOfItems > 1) {
      setNumberOfItems(numberOfItems - 1);
    }
  };

  return (
    <Container>
      <ImageContainer>
        <Image src={productImg} alt={alt} />
      </ImageContainer>
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
        <Spacer height="3" />
        <BottomContainer>
          <IncreDecreContainer>
            <Button
              onClick={decreament}
              primary="true"
              bgColor={darkGray}
              textColor="#000"
              minWidth="2"
            >
              <h2>-</h2>
            </Button>
            <h3>{numberOfItems}</h3>
            <Button
              onClick={increament}
              primary="true"
              bgColor={darkGray}
              textColor="#000"
              minWidth="2"
            >
              <h2>+</h2>
            </Button>
          </IncreDecreContainer>

          <Spacer height="3" />
          <Button primary="true" textColor={whiteShade} bgColor="red">
            Remove
          </Button>
        </BottomContainer>
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
  width: 100%;
  margin: 2rem 0;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
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

const BottomContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const IncreDecreContainer = styled.div`
  display: flex;
  background-color: ${whiteShade};
  border-radius: 1rem;
  justify-content: space-between;
  align-items: center;

  h3 {
    padding: 0 2rem;
  }
`;
