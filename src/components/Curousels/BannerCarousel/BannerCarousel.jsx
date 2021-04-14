import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = ({ bannerData }) => {
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
    <div className="banner_section">
      <Slider {...config}>
        {bannerData.map((items, index) => {
          return (
            <div key={index} className="img-banner">
              <img className="img" src={items.image} alt={`Banner ${index}`} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
