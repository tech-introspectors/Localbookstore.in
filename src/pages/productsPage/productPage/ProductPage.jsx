import React from "react";
import styled from "styled-components";
import ProductSection from "./components/ProductSection";
import ProductDetails from "./components/ProductDetails";

// demo img
import img from "./../../../images/product/hp-cursedchild.jpeg";
import { MainTitle, Spacer } from "../../../style/styledCompnent";
import CategoryCarousel from "../../../components/Curousels/CategoryCarousel/CategoryCarousel";
import { category_1Data } from "../../../data/catergoryData/categoryData";
import Footer from "../../../components/footer/Footer";

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

      <Spacer height="5" />

      <ProductDetails
        productAuthor="J.K Rowling"
        language="English"
        productISBN_No="9780751565362, 0751565369"
        productPublisher="Little, Brown Book Group"
        productGenre="Fiction"
        pages="352 pages"
        dimension="28 x 196 mm"
        year="2001"
        discription="

The official playscript of the original West End production of Harry Potter and the Cursed Child. It was always difficult being Harry Potter and it isn't much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places. "
      />

      {/* ReviewsSection */}

      <Spacer height="5" />

      <SimilarItemsSlideContainer>
        <MainTitle>Similar Items</MainTitle>
        <CategoryCarousel categoryData={category_1Data} />
      </SimilarItemsSlideContainer>
      <Spacer height="5" />
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 80%;
  margin: 12rem auto 0 auto;
`;

const SimilarItemsSlideContainer = styled.div`
  width: 80%;
  margin: auto;
`;

export default ProductPage;
