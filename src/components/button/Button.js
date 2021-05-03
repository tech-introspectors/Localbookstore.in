import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryColor, whiteShade } from "../../constants/constants";

export const Button = styled(Link)`
  background: ${({ primary, bgColor }) =>
    primary ? `${bgColor}` : `${primaryColor}`};
  white-space: nowrap;
  outline: none;
  border: ${(border) => (border ? `2px solid ${whiteShade}` : "none")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : 1.2}rem;
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 20)}rem;
  max-width: 25rem;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "1rem 3rem" : "1.2rem 2.4rem")};
  color: ${({ textColor }) => (textColor ? textColor : `${primaryColor}`)};
  font-size: ${(big) => (big ? "2rem" : "1.4rem")};
  &:hover {
    transform: translateY(-0.2rem);
    opacity: 0.8;
  }
`;
