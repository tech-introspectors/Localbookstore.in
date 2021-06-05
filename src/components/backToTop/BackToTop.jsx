import React,{useState, useEffect} from "react";
import styled from "styled-components";
import { BiUpArrowAlt } from "react-icons/bi";
import { primaryColor, darkPrimaryColor } from "../../constants/constants";

const BackToTop = ({showBelow}) => {

  const [show,setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if(window.pageYOffset > showBelow){
      if(!show) setShow(true);
    }else{
      if(show) setShow(false);
    }
  }

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth'
    });
  }

  useEffect(() => {
    if(showBelow){
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll",handleScroll);
  })

  return (
   <>
    {
      show && (
         <BackToTopButton onClick={handleOnClick}>
            <ArrowIcon />
          </BackToTopButton>
        )
    }
   </>
  );
};

export default BackToTop;

const BackToTopButton = styled.div`
  position: fixed;
  bottom: 6rem;
  right: 2rem;
  z-index: 999;
  width: 5rem;
  height: 6rem;
  background-color: ${primaryColor};
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s, border 0.1s, box-shadow 0.5s;
  cursor: pointer;
  color: #fff;
  font-size: 3.2rem;

  :hover {
    border: 0.3rem solid #fff;
    box-shadow: 0 0 2rem rgba(225, 225, 225, 0.5);
  }
`;
const ArrowIcon = styled(BiUpArrowAlt)``;