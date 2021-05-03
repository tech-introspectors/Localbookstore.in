import React from "react";
import styled from "styled-components";
import ProductCard from "../../components/ProductCard/ProductCard";
import { productData } from "../../data/productsData/productsData";
import Footer from "./../../components/footer/Footer";

import { useHistory } from "react-router-dom";

const MainContainer = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10%;
  transform: translateY(10%);
`;

const Container = styled.div``;

const CategoryPage = ({ categoryName }) => {
  const histroy = useHistory();
  const handleCard = () => {
    histroy.push(`/product`);
  };

  return (
    <>
      <MainContainer>
        <Container>
          {productData.map((item, index) => {
            return (
              <ProductCard
                productImg={item.img}
                alt="img"
                title={item.title}
                price={item.price}
                beforeOfferPrice={item.beforeOfferPrice}
                offerPercent={item.offerPercentage}
                message={item.message}
                devliveryBy={item.deliveryBy}
                handleCard={handleCard}
              />
            );
          })}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};

export default CategoryPage;
