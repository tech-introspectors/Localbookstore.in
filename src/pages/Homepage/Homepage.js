import React from "react";
import styled from "styled-components";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerData from "../../data/bannerProducts/BannerData";
import Slider from "react-slick";
import "./Homepage.css";
import "./categorySlideStyles/CategorySlidesStyle.css";
import { category_1Data } from "../../data/catergoryData/categoryData";
import CategoryCarousel from "../../components/CategoryCarousel/CategoryCarousel";
import {
  darkPrimaryColor,
  darkSecondaryColor,
} from "../../constants/constants";
// import { whiteShade } from "../../constants/constants";

const HomepageSection = styled.section`
  overflow: hidden;
  transition: all 0.5s ease-in-out 0s;
  ${"" /* background: ${whiteShade}; */}
`;

const ProductSlidesContainer = styled.div`
  width: 70vw;
  height: auto;
  margin: auto;
`;

const CategoryContainer = styled.div`
  h2 {
    font-weight: bold;
    padding: 0 0 2.5rem 0;
    width: fit-content;
    height: fit-content;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 40%;
      left: 0%;
      width: 100%;
      height: 2px;
      border-bottom: 5px solid ${darkPrimaryColor};
    }

    &::before {
      content: "";
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
      height: 0px;
      border-bottom: 10px solid ${darkSecondaryColor};
    }
  }
`;

const Homepage = (props) => {
  const config = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // enable center mode
    centerPadding: "50px", // set center padding
    pauseOnHover: true,
  };

  return (
    <HomepageSection>
      <div className="banner_section">
        <Slider {...config}>
          {BannerData.map((items, index) => {
            return (
              <div key={index} className="img-banner">
                <img
                  className="img"
                  src={items.image}
                  alt={`Banner ${index}`}
                />
              </div>
            );
          })}
        </Slider>
      </div>

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

      <div className="banner_section">
        <Slider {...config}>
          {BannerData.map((items, index) => {
            return (
              <div key={index} className="img-banner">
                <img
                  className="img"
                  src={items.image}
                  alt={`Banner ${index}`}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </HomepageSection>
  );
};

export default Homepage;
