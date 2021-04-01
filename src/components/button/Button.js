import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryColor, whiteShade } from "../../constants/constants";

export const Button = styled(Link)`
  background: ${({ primary, bgColor }) =>
    primary ? `${bgColor}` : `${primaryColor}`};
  white-space: nowrap;
  outline: none;
  border: ${(border) => (border ? `2px solid ${whiteShade}` : "none")};
  border-radius: ${({ borderRadius }) => (borderRadius ? 12 : 50)}px;
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 200)}px;
  max-widht: 250px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? "10px 30px" : "12px 24px")};
  color: ${({ textColor }) => (textColor ? textColor : `${primaryColor}`)};
  font-size: ${(big) => (big ? "20px" : "14px")};
  &:hover {
    transform: translateY(-2px);
  }
`;
