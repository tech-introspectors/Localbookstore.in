import React, { useState } from "react";
import styled from "styled-components";
import ShoppingCartCard from "../../components/shoppingCartCard/ShoppingCartCard";
import { productData } from "./../../data/productsData/productsData";
import { whiteShade, darkPrimaryColor } from "../../constants/constants";
import Footer from "../../components/footer/Footer";

import { MainTitle, Spacer } from "../../style/styledComponent";
import { Button } from "../../components/button/Button";
import CategoryCarousel from "../../components/Curousels/CategoryCarousel/CategoryCarousel";
import { category_1Data } from "../../data/catergoryData/categoryData";

const ShoppingCart = () => {
  const [noOfItems, setNoOfItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <>
      <MainContainer>
        <MainTitle>Shopping Cart</MainTitle>
        <Containers>
          <LeftContainer>
            {productData.map((item, index) => {
              return (
                <ShoppingCartCard
                  key={index}
                  productImg={item.img}
                  title={item.title}
                  price={item.price}
                  productsInStock={item.productInStock}
                />
              );
            })}
          </LeftContainer>
          <RightContainer>
            <RightContent>
              <h3>
                Subtotal ({noOfItems}-
                {noOfItems === 0 || noOfItems === 1 ? "Item" : "Items"}){" "}
              </h3>
              <Spacer height="3" />
              <h1>₹{totalAmount !== 0 ? totalAmount : "0.0"}</h1>

              <Spacer height="3" />
              <BtnContainer>
                <Button textColor={whiteShade}> Proceed to Buy</Button>
              </BtnContainer>
            </RightContent>

            <Spacer height="3" />
            <AnotherContainer>
              <Content>
                <h2>Sponsored Products related to items in your cart</h2>
              </Content>
            </AnotherContainer>
          </RightContainer>
        </Containers>

        <MainTitle>More items to explore</MainTitle>
        <SlideContainer>
          <CategoryCarousel categoryData={category_1Data} />
        </SlideContainer>
        <MainTitle>Buy in other parts of the store</MainTitle>
        <SlideContainer>
          <CategoryCarousel categoryData={category_1Data} />
        </SlideContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ShoppingCart;

const MainContainer = styled.div`
  width: 90%;
  margin: 15rem auto 0 auto;
`;
const Containers = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftContainer = styled.div`
  flex: 2;
  padding: 2rem;
`;

const RightContainer = styled.div`
  flex: 1;
  padding: 2rem;
  margin-top: 2rem;
`;

const RightContent = styled.div`
  background-color: ${darkPrimaryColor};
  text-align: center;
  height: 40vh;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-weight: bold;
    color: #fff;

    @media screen and (max-width: 768px) {
      font-size: 2.8rem;
    }
  }

  h3 {
    color: #fff;
    opacity: 0.8;
    font-weight: 500;

    @media screen and (max-width: 768px) {
      font-size: 2.4rem;
    }
  }
`;

const BtnContainer = styled.div``;
const AnotherContainer = styled.div``;
const Content = styled.div`
  flex: 1;
  height: auto;
  background-color: ${whiteShade};
  padding: 2rem;
  border-radius: 1rem;

  h2 {
    color: ${darkPrimaryColor};
  }
`;

const SlideContainer = styled.div`
  width: 90%;
  margin: auto;
`;
