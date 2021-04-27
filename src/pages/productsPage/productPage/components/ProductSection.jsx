import React from "react";
import styled from "styled-components";
import { Button } from "../../../../components/button/Button";
import {
  borderRadius,
  darkPrimaryColor,
  lightWhiteShade,
  whiteShade,
} from "../../../../constants/constants";
import { Spacer } from "../../../../style/styledCompnent";

const ProductSection = ({
  img,
  alt,
  title,
  newPrice,
  oldPrice,
  offerPercentage,
}) => {
  return (
    <MainContainer>
      <ContainerLeft>
        <Div>
          <Image src={img} alt="img" />
        </Div>
      </ContainerLeft>
      <Spacer />
      <ContainerRight>
        <Title>{title}</Title>
        <SubTitle>
          {newPrice} <span className="beforeOfferPrice">{oldPrice}</span>{" "}
          <span className="offerPercent">{offerPercentage} off</span>
        </SubTitle>
        <Spacer height="2" />

        <BtnContainer>
          <Button textColor={whiteShade} minWidth="">
            Add to cart
          </Button>
          <Spacer width="10" height="2" />
          <Button
            primary="true"
            bgColor={darkPrimaryColor}
            textColor={whiteShade}
          >
            Buy Now
          </Button>
        </BtnContainer>
      </ContainerRight>
    </MainContainer>
  );
};

// ** Styling
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContainerLeft = styled.div`
  padding: 4rem;
  margin: 3rem;
  background: ${lightWhiteShade};
  border-radius: ${borderRadius};
`;

const Div = styled.div``;

const Image = styled.img`
  border-radius: ${borderRadius};
`;

const ContainerRight = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.7rem;
  color: ${darkPrimaryColor};
  margin-bottom: 2rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    text-align: center;
  }
`;

const SubTitle = styled.h2`
  font-size: 2.2rem;
  margin: 0.5rem 0 0 0;
  font-weight: bold;

  span.beforeOfferPrice {
    color: grey;
    text-decoration: line-through;
    margin: 0 0.5rem;
  }

  span.offerPercent {
    color: #18ab00;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default ProductSection;
