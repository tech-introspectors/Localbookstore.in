import React from "react";
import styled from "styled-components";
import ProductSection from "./components/ProductSection";

// demo img
import img from "./../../../images/product/hp-cursedchild.jpeg";

const ProductPage = () => {
  return (
    <MainContainer>
      <ProductSection
        img={img}
        title="Harry Potter and the Cursed Child - Parts One and Two (English, Paperback, Rowling J.k)"
        newPrice="Rs.384"
        oldPrice=" Rs.499"
        offerPercentage="23% "
      />

      {/* ProductDetails */}

      {/* ReviewsSection */}

      {/* SimilarItemsSlider */}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin-top: 12rem;
`;

export default ProductPage;
