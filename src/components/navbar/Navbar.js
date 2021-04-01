import React, { useState } from "react";
import { darkPrimaryColor, whiteShade } from "./../../constants/constants";
import { Button } from "./../button/Button";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";

import { FaSearch } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

const Container = styled.div`
  width: 100%;
  max-height: 8vh;
  height: 8vh;
  background: ${darkPrimaryColor};
  position: fixed;
  top: 0;
  z-index: 100;
`;

const NavWrapper = styled.div``;
const Logo = styled(Link)`
  margin-right: auto;
  text-decoration: none;
  h3 {
    color: ${whiteShade};
    margin-left: 2rem;
    cursor: pointer;
  }
`;
const Nav = styled.div`
  height: 8vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const RightNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

const SearchBox = styled.div`
  max-width: 50vw;
  width: ${({ toggleSearch }) => (toggleSearch ? 40 : 0)}vw;
  opacity: ${({ toggleSearch }) => (toggleSearch ? 1 : 0)};
  margin-right: 4rem;
  transition: all 0.5s ease 0s;

  input {
    padding: 10px 24px;
    width: 100%;
    font-size: 1rem;
    outline: none;
    border: none;
    border-radius: 10px;
  }
`;

const IconsStyle = css`
  color: #fff;
  margin-right: 2rem;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const SearchIcon = styled(FaSearch)`
  ${IconsStyle}
`;

const CartContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AddShoppingCart = styled(MdAddShoppingCart)`
  ${IconsStyle}
`;
const Profile = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin-right: 5rem;
`;
const BtnWrapper = styled.div`
  margin-right: 2rem;
`;

const Navbar = () => {
  const [_toggleSearch, setToggleSerach] = useState(false);

  const handleToggleSearch = () => {
    setToggleSerach(!_toggleSearch);
  };
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
                title="Type in a category"
              />
            </SearchBox>
            <SearchIcon onClick={handleToggleSearch} />
            <CartContainer to="/shoppingcart">
              <AddShoppingCart />
            </CartContainer>
            <Profile to="profile">Account</Profile>
            <BtnWrapper>
              <Button
                to="/loginSystem"
                borderRadius={true}
                primary={true}
                textColor="#fff"
                big={true}
                minWidth="150"
              >
                Sign Up
              </Button>
            </BtnWrapper>
          </RightNav>
        </Nav>
      </NavWrapper>
    </Container>
  );
};

export default Navbar;
