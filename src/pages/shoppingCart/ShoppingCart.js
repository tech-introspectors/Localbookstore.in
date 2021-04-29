import React from "react";
import styled from "styled-components";
import ShoppingCartCard from "../../components/shoppingCartCard/ShoppingCartCard";
import { productData } from "./../../data/productsData/productsData";

const ShoppingCart = () => {
  return (
    <MainContainer>
      <Containers>
        <LeftContainer>
          {productData.map((item, index) => (
            <ShoppingCartCard
              key={index}
              productImg={item.img}
              title={item.title}
              price={item.price}
              productsInStock={item.productInStock}
            />
          ))}
        </LeftContainer>
        <RightContainer></RightContainer>
      </Containers>
    </MainContainer>
  );
};

export default ShoppingCart;

const MainContainer = styled.div``;
const Containers = styled.div``;
const LeftContainer = styled.div``;
const RightContainer = styled.div``;
