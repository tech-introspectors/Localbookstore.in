import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BackToTop.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div id="scroll_top" onClick={scrollToTop}>
      {isVisible && (
        <Link to="#top">
          <i class="fas fa-angle-up"></i>
        </Link>
      )}
    </div>
  );
};

export default BackToTop;
