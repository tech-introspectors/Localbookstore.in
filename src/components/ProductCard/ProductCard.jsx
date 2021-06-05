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
  width: 100%;
  height: auto;
  background: ${lightWhiteShade};
  padding: 3rem;
  margin-bottom: 4rem;
  border-radius: 2rem;
  cursor: pointer;

  @media (min-width: 648px){
    padding: 4rem;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftContent = styled.div`
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px){
    margin-bottom: 0rem;
    margin-right: 4rem;
  }
  

  img {
    width: 25rem;
    min-width: 20rem;
    border-radius: 2.5rem;
    box-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.4);
    padding: 0.5rem;

    @media (min-width: 768px){
      width: 80%;
    }
  }
`;

const RightContent = styled.div`
  h1.title {
    font-size: 2.5rem;
    color: ${darkPrimaryColor};
    margin-bottom: 2rem;
    font-weight: bold;
  }

  h2.price,p.message{
     font-size: 1.7rem;
  }

  h2.price {
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
