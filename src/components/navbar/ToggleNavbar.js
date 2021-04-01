import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { FaBars } from "react-icons/fa";
import { darkSecondaryColor } from "../../constants/constants";
import { MenuData } from "../../data/MenuData";

const Nav = styled.nav`
  width: 100%;
  max-height: 15vh;
  height: 15vh;
  display: flex;
  background: ${({ isScrolled }) =>
    isScrolled ? "transparent" : darkSecondaryColor};
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 99;
  position: fixed;
  transition: ${({ isScrolled }) => (isScrolled ? ".5s ease-in-out" : "")};
`;

const NavWrapper = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(-90%);
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const MenuBars = styled(FaBars)`
  display: block;
  color: #fff;
  height: 26px;
  width: 26px;
  position: absolute;
  bottom: 0;
  transform: translateY(20%);
  cursor: pointer;

  @media screen and (max-width: 768px) {
    transform: translateY(-40%);
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-item: center;
  margin-left: 2rem;
  margin-right: -48px;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const ToggleNavbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const isScrolled = () => {
    if (window.scrollY >= 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  window.addEventListener("scroll", isScrolled);
  return (
    <Nav isScrolled={isScroll}>
      <NavWrapper>
        <MenuBars />
        <NavMenu>
          {MenuData.map((items, index) => {
            return (
              <NavMenuLinks to={items.link} key={index}>
                {items.title}
              </NavMenuLinks>
            );
          })}
        </NavMenu>
      </NavWrapper>
    </Nav>
  );
};

export default ToggleNavbar;
