import React, { useState } from "react";
import { Button } from "./../button/Button";

import {
  Container,
  NavWrapper,
  Nav,
  ToggleNavbar,
  MenuBars,
  NavMenuLinks,
  NavMenu,
  NavWrap,
  Logo,
  RightNav,
  SearchBox,
  SearchIcon,
  CartContainer,
  AddShoppingCart,
  Profile,
  BtnWrapper,
} from "./NavbarStyle";

import { MenuData } from "../../data/MenuData";

const Navbar = () => {
  const [_toggleSearch, setToggleSerach] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleToggleSearch = () => {
    setToggleSerach(!_toggleSearch);
  };

  const isScrolled = () => {
    if (window.scrollY >= 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
    console.log(isScroll);
  };

  window.addEventListener("scroll", isScrolled);
  return (
    <Container>
      <NavWrapper>
        <Nav>
          <Logo to="/">
            <h3>THE LOCAL BOOKSTORE</h3>
          </Logo>
          <RightNav>
            <SearchBox toggleSearch={_toggleSearch}>
              <input
                type="text"
                id="serachbox"
                placeholder="Search The Local Bookstore.in"
              />
            </SearchBox>
            <SearchIcon onClick={handleToggleSearch} />
            <CartContainer to="/shoppingcart">
              <AddShoppingCart />
            </CartContainer>
            <Profile to="/profile">Account</Profile>
            <BtnWrapper>
              <Button
                to="/loginSystem"
                primary={true}
                textColor="#fff"
                big={true}
                minWidth="15"
              >
                Sign Up
              </Button>
            </BtnWrapper>
          </RightNav>
        </Nav>
      </NavWrapper>
      <ToggleNavbar toggleNavOnScroll={isScroll}>
        <NavWrap>
          <MenuBars />
          <NavMenu>
            {MenuData.map((items, index) => {
              return (
                <NavMenuLinks to={items.path} key={index}>
                  {items.title}
                </NavMenuLinks>
              );
            })}
          </NavMenu>
        </NavWrap>
      </ToggleNavbar>
    </Container>
  );
};

export default Navbar;
