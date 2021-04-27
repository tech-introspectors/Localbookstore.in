import React from "react";
import styled from "styled-components";
import Footer from "./../../components/footer/Footer";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerData from "../../data/bannerProducts/BannerData";
import "./Homepage.css";
import "./categorySlideStyles/CategorySlidesStyle.css";
import { category_1Data } from "../../data/catergoryData/categoryData";
import CategoryCarousel from "../../components/Curousels/CategoryCarousel/CategoryCarousel";
import {
  darkPrimaryColor,
  darkSecondaryColor,
} from "../../constants/constants";
import BannerCarousel from "../../components/Curousels/BannerCarousel/BannerCarousel";
// import BackToTop from "../../components/backToTop/BackToTop";
// import { whiteShade } from "../../constants/constants";

const HomepageSection = styled.section`
  overflow: hidden;
  transition: all 0.5s ease-in-out 0s;
  ${"" /* background: ${whiteShade}; */}

  .slick-prev, .slick-next {
    display: none;
  }
`;

const ProductSlidesContainer = styled.div`
  width: 80vw;
  height: auto;
  margin: auto;
`;

const CategoryContainer = styled.div`
  h2 {
    font-weight: bold;
    padding: 0 0 5rem 0;
    width: fit-content;
    height: fit-content;
    position: relative;
    font-size: 2.5rem;

    &::after {
      content: "";
      position: absolute;
      top: 40%;
      left: 0%;
      width: 100%;
      height: 0.2rem;
      border-bottom: 0.5rem solid ${darkPrimaryColor};
    }

    &::before {
      content: "";
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
      height: 0rem;
      border-bottom: 1rem solid ${darkSecondaryColor};
    }
  }
`;

const Homepage = (props) => {
  return (
    <HomepageSection>
      {/* <BackToTop /> */}
      <BannerCarousel bannerData={BannerData} />

      <ProductSlidesContainer>
        <CategoryContainer>
          <h2>Academic Books:</h2>
          <CategoryCarousel categoryData={category_1Data} />
        </CategoryContainer>
        <CategoryContainer>
          <h2>Fiction Books:</h2>
          <CategoryCarousel categoryData={category_1Data} />
        </CategoryContainer>
        <CategoryContainer>
          <h2>Motivation Books:</h2>
          <CategoryCarousel categoryData={category_1Data} />
        </CategoryContainer>
      </ProductSlidesContainer>

      {/* bottom banner */}
      <BannerCarousel bannerData={BannerData} />

      <Footer />
    </HomepageSection>
  );
};

export default Homepage;
