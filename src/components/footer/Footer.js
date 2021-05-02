import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import {
  darkPrimaryColor,
  darkSecondaryColor,
} from "./../../constants/constants";

import {
  ColumnOneData,
  ColumnThreeData,
  ColumnTwoData,
} from "../../data/FooterData";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${darkSecondaryColor};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80vw;
  width: 80vw;
  margin: auto;
  min-height: 40vh;
  height: 40vh;
  padding: 3rem 3rem;
  transition: all 0.5s ease 0s;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
const LogoContainer = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 2rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  h2 {
    font-size: 3rem;
    color: #fff;
    text-align: center;

    @media screen and (max-width: 768px) {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const ColumnsStyle = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 1.6rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const ColumnOne = styled.div`
  ${ColumnsStyle}

  @media screen and (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;
const ItemLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 1.6rem;
  color: #fff;
  font-size: 1.8rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ColumnTwo = styled.div`
  ${ColumnsStyle}
`;
const ColumnThree = styled.div`
  ${ColumnsStyle}
`;

const BottomFooter = styled.div`
  background: ${darkPrimaryColor};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  p {
    color: #fff;
    text-transform: uppercase;
    word-spacing: 0.5rem;
    text-align: center;
    padding: 2rem 0;
    font-size: 1.3rem;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Logo to="/">
            <h2>THE LOCAL BOOKSTORE</h2>
          </Logo>
        </LogoContainer>
        <ColumnOne>
          {ColumnOneData.map((items, index) => {
            return (
              <ItemLink to={items.path} key={index}>
                {items.category}
              </ItemLink>
            );
          })}
        </ColumnOne>

        <ColumnTwo>
          {ColumnTwoData.map((items, index) => {
            return (
              <ItemLink to={items.path} key={index}>
                {items.category}
              </ItemLink>
            );
          })}
        </ColumnTwo>
        <ColumnThree>
          {ColumnThreeData.map((items, index) => {
            return (
              <ItemLink to={items.path} key={index}>
                {items.title}
              </ItemLink>
            );
          })}
        </ColumnThree>
      </Wrapper>
      <BottomFooter>
        <Content>
          <p>All Right Reserved @ thelocalbookstore.in 2021</p>
        </Content>
      </BottomFooter>
    </Container>
  );
};

export default Footer;
