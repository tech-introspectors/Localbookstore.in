import React from "react";
import styled from "styled-components";

const ProductDetatils = ({
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
        <h1 className="title">Product Information</h1>
        <h3 className="subTitle">{productAuthor}</h3>
        <h3 className="subTitle">{language}</h3>
        <h3 className="subTitle">{productISBN_No}</h3>
        <h3 className="subTitle">{productPublisher}</h3>
        <h3 className="subTitle">{productGenre}</h3>
        <h3 className="subTitle">{pages}</h3>
        <h3 className="subTitle">{dimension}</h3>
        <h3 className="subTitle">{year}</h3>
      </LeftContainer>
      <RightContainer>
        <h1 className="title">Description</h1>
        <p className="discription">{discription}</p>
      </RightContainer>
    </Container>
  );
};

//Styling
const Container = styled.div``;
const LeftContainer = styled.div``;
const RightContainer = styled.div``;

export default ProductDetatils;
