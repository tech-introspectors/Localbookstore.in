import React from "react";
import styled from "styled-components";
import {
  darkPrimaryColor,
  lightWhiteShade,
  ratingColor,
} from "../../constants/constants";
import { ImStarFull, ImStarHalf } from "react-icons/im";

// ImStarEmpty

const Container = styled.div`
  width: 60vw;
  heigth: 50vh;
  background: ${lightWhiteShade};
  padding: 5rem;
  margin: 4rem;
  border-radius: 3rem;
  cursor: pointer;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    font-size: 45%;
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  margin-right: 7rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 7rem;
    margin-right: 5rem;
  }

  img {
    width: 120%;
    border-radius: 2.5rem;
    box-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.4);
    padding: 0.5rem;
  }
`;

const RightContent = styled.div`
  h1.title {
    font-size: 3.5rem;
    color: ${darkPrimaryColor};
    margin-bottom: 2rem;
    font-weight: bold;
  }

  h2.price {
    font-size: 2.5rem;
    margin: 0.5rem 0 0 0;
    font-weight: bold;
  }

  span.beforeOfferPrice {
    color: grey;
    text-decoration: line-through;
    margin: 0 0.5rem;
  }

  span.offerPercent {
    color: #18ab00;
  }

  p.message {
    font-size: 2rem;
    color: grey;
    margin-bottom: 1.5rem;
    font-weight: normal;
  }

  p {
    color: rgb(184, 184, 184);
    font-weight: bold;
    font-size: 2rem;
  }
`;

const Rating = styled.i`
  color: ${ratingColor};
  font-size: 2.5rem;
`;

const ProductCard = ({
  productImg,
  alt,
  title,
  price,
  beforeOfferPrice,
  offerPercent,
  message,
  devliveryBy,
  handleCard,
}) => {
  return (
    <Container onClick={handleCard}>
      <ContentContainer>
        <LeftContent>
          <img src={productImg} alt={alt} />
        </LeftContent>
        <RightContent>
          <h1 className="title">{title}</h1>
          <Rating>
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarFull />
            <ImStarHalf />
          </Rating>

          <h2 className="price">
            ₹{price}
            <span className="beforeOfferPrice">₹{beforeOfferPrice}</span>
            <span className="offerPercent">{offerPercent}% off</span>
          </h2>
          <p className="message">{message}</p>

          <p>
            Get it by {devliveryBy} <br />
            FREE Delivery over ₹{price}. Fullfilled by <br />
            local Bookstore{" "}
          </p>
        </RightContent>
      </ContentContainer>
    </Container>
  );
};

export default ProductCard;
