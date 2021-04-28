import React from "react";
import styled, { css } from "styled-components";
import { MainTitle, Spacer } from "../../../../style/styledCompnent";

const ProductDetails = ({
  productAuthor,
  language,
  productISBN_No,
  productPublisher,
  productGenre,
  pages,
  dimension,
  year,
  discription,
}) => {
  return (
    <Container>
      <LeftContainer>
        <MainTitle>Product Information</MainTitle>
        <h2 className="subTitle">Author: {productAuthor}</h2>
        <h2 className="subTitle">Language: {language}</h2>
        <h2 className="subTitle">ISBN Number: {productISBN_No}</h2>
        <h2 className="subTitle">Publisher: {productPublisher}</h2>
        <h2 className="subTitle">Genre: {productGenre}</h2>
        <h2 className="subTitle">Pages: {pages}</h2>
        <h2 className="subTitle">Dimension: {dimension}</h2>
        <h2 className="subTitle">Year Published: {year}</h2>
      </LeftContainer>

      <Spacer width="25" height="5" />
      <RightContainer>
        <MainTitle>Description</MainTitle>
        <p className="discription">{discription}</p>
      </RightContainer>
    </Container>
  );
};

//Styling
const Container = styled.div`
  display: flex;
  width: 80%;
  margin: auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const H1Style = css`
  h1.title {
    font-size: 2.5rem;
    line-height: 5rem;
    margin-bottom: 2rem;
    font-weight: bold;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const LeftContainer = styled.div`
  ${H1Style}
  width: 40%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  h2 {
    font-size: 2rem;
    line-height: 4rem;
    font-weight: 400;

    @media screen and (max-width: 768px) {
      font-size: 1.7rem;
    }
  }
`;
const RightContainer = styled.div`
  ${H1Style}
  width:60%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  p {
    font-size: 1.7rem;
    line-height: 3rem;
    font-weight: 400;

    @media screen and (max-width: 768px) {
      text-align: justify;
    }
  }
`;

export default ProductDetails;
