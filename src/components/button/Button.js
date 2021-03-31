import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  darkPrimaryColor,
  primaryColor,
  whiteShade,
} from "../../constants/constants";

export const Button = styled(Link)`
  background: ${({ primary }) =>
    primary ? `${darkPrimaryColor}` : `${primaryColor}`};
  white-space: nowrap;
  outline: none;
  border: ${(border) => (border ? `2px solid ${whiteShade}` : "none")};
  border-radius: 50px;
  min-width: 200px;
  max-widht: 250px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(big) => (big ? "12px 40px" : "12px 24px")};
  color: ${({ primary }) => (primary ? `${primaryColor}` : `${whiteShade}`)};
  font-size: ${(big) => (big ? "20px" : "14px")};
  &:hover {
    transform: translateY(-2px);
  }
`;
