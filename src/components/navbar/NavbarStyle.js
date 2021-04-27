import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { FaBars, FaSearch } from "react-icons/fa";
import {
  darkPrimaryColor,
  darkSecondaryColor,
  whiteShade,
} from "../../constants/constants";

export const Container = styled.div`
  width: 100%;
  max-height: 16vh;
  height: 16vh;
  background: transparent;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
`;

export const NavWrapper = styled.div`
  width: 100%;
  max-height: 8vh;
  height: 8vh;
  background: ${darkPrimaryColor};
  position: absolute;
  top: 0;
  z-index: 100;
`;

export const Logo = styled(Link)`
  margin-right: auto;
  text-decoration: none;
  h3 {
    font-size: 2.5rem;
    text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    color: ${whiteShade};
    margin-left: 2rem;
    cursor: pointer;
  }
`;
export const Nav = styled.div`
  height: 8vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const RightNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const SearchBox = styled.div`
  max-width: 50vw;
  width: ${({ toggleSearch }) => (toggleSearch ? 40 : 0)}vw;
  opacity: ${({ toggleSearch }) => (toggleSearch ? 1 : 0)};
  margin-right: 4rem;
  transition: all 0.5s ease 0s;

  input {
    padding: 1rem 2.4rem;
    width: 100%;
    font-size: 1.6rem;
    outline: none;
    border: none;
    border-radius: 1rem;
  }
`;

export const IconsStyle = css`
  color: #fff;
  margin-right: 2rem;
  margin-left: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

export const SearchIcon = styled(FaSearch)`
  ${IconsStyle}
`;

export const CartContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AddShoppingCart = styled(MdAddShoppingCart)`
  ${IconsStyle}
`;
export const Profile = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: #fff;
  margin-right: 5rem;
`;
export const BtnWrapper = styled.div`
  margin-right: 2rem;
`;

export const ToggleNavbar = styled.div`
  width: 100%;
  max-height; 8vh;
  height: 8vh;
  background: ${darkSecondaryColor};
  position: absolute;
  top: 50%;
  z-index: 99;
  transform: translateY(${({ toggleNavOnScroll }) =>
    toggleNavOnScroll ? -100 : 0}%);
  transition: all 0.5s ease 0s;
`;

export const NavWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const NavLink = css`
  text-decoration: none;
  color: ${whiteShade};
  margin: 0 1rem;
  font-size: 1.1rem;
  cursor: pointer;
`;

export const MenuBars = styled(FaBars)`
  width: 2.5rem;
  height: 2.5rem;
  color: ${whiteShade};
  margin-left: 3rem;
  margin-right: 2rem;
  background: transparent;
  cursor: pointer;
`;
export const NavMenu = styled.div``;

export const NavMenuLinks = styled(Link)`
  ${NavLink}
  font-size: 1.9rem;
  position: relative;
  border-bottom: 0;

  &::before {
    content: "";
    position: absolute;
    top: 110%;
    width: 0%;
    height: 0.2rem;
    border-bottom: 0.25rem solid ${whiteShade};
    bottom: 1.5rem;
    transition: all 0.4s linear 0s;
  }

  &:hover::before {
    width: 100%;
  }
`;
