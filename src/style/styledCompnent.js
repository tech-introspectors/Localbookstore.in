import styled from "styled-components";
import { darkPrimaryColor, darkSecondaryColor } from "../constants/constants";

// ** using this component we can provide space between any thing
export const Spacer = styled.div`
  width: ${({ width }) => (width ? width : 0)}rem;
  height: ${({ height }) => (height ? height : 0)}rem;

  @media screen and (max-width: 768px) {
    width: ${({ width }) => (width ? width / 2 : 0)}rem;
    height: ${({ height }) => (height ? height / 2 : 0)}rem;
  }
`;

// ** Adding stylish border for the Title
export const MainTitle = styled.h1`
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

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// **  Here only reuseable style should be coded not other than that
