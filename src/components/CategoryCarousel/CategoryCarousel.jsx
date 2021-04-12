import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  padding: 0 0 12vh 0;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 30px;
    cursor: pointer;
  }

  .category-img {
    border: none;
    border-radius: 30px;
    overflow: hidden;
  }
`;

const CategoryCarousel = ({ categoryData }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings}>
        {categoryData.map((items, index) => {
          return (
            <div className="category-img" key={index}>
              <img src={items.image} alt={items.alt} />
            </div>
          );
        })}
      </Slider>
    </Container>
  );
};

export default CategoryCarousel;
