import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  darkPrimaryColor,
  primaryColor,
  whiteShade,
} from "../../constants/constants";
import { Button } from "./../../components/button/Button";
import FormInputField from "./form/FormInputField";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 101;
  background: #fff;
`;

const Logo = styled(Link)`
  display: flex;
  justify-contetn: center;
  align-items: center;
  position: absolute;
  top: 1rem;
  left: 2rem;
  z-index: 9999;
  cursor: pointer;
  text-decoration: none;
  width: fit-content;
  height: fit-content;

  h1 {
    font-size: 3rem;
    color: ${darkPrimaryColor};
    position: relative;
    text-transform: uppercase;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0.4rem;
      background: ${primaryColor};
      top: 110%;
    }

    &::after {
      content: "";
      position: absolute;
      width: 30%;
      height: 0.8rem;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 115%;
      background: ${darkPrimaryColor};
      animation: _move 1s infinite;
    }
  }
`;

const FormContainer = styled.div`
  width: 70vw;
  height: 80vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backgound: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(reverse) => (reverse ? "" : "row-reverse")};
  box-shadow: 0rem 2rem 2rem rgba(0, 0, 0, 0.2),
    0rem 0rem 5rem rgba(0, 0, 0, 0.2);
  position: absolute;
  transition: all 0.5s ease;

  @media screen and (max-widht: 768px) {
    flex-direction: column;
  }
`;

const ContainerTitle = styled.h1`
  color: ${darkPrimaryColor};
  margin-bottom: 2rem;
  font-size: 3rem;
`;
const LeftContainer = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Form = styled.form``;

const RightContainer = styled.div`
  background-color: ${primaryColor};
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentWrapper = styled.div`
  height: 80%;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: ${whiteShade};
  font-size: clamp(1rem, 8vw, 3rem);
  text-align: center;
  margin-bottom: 4rem;
  font-size: 3.5rem;
`;

const Discription1 = styled.p`
  color: ${whiteShade};
  text-align: center;
  font-size: clamp(1rem, 8vw, 2rem);
  margin-bottom: 2.5rem;
`;

const Discription2 = styled.p`
  color: ${whiteShade};
  text-align: center;
  font-size: clamp(1rem, 8vw, 1.6rem);
  margin-bottom: 2rem;
`;

const BtnWrapper = styled.div`
  padding: 1rem;
`;

const SignUpForm = styled.div`
  transition: all 0.5s ease-in-out;
`;
const SignInForm = styled.div`
  transition: all 0.5s ease-in-out;
`;

const LoginSystem = ({ reverse }) => {
  const [toggleSignUp, setToggleSignUp] = useState(false);
  const [toggleSignIn, setToggleSignIn] = useState(true);

  const _onClickToggleSignUp = () => {
    setToggleSignUp(!toggleSignUp);
    setToggleSignIn(!toggleSignIn);
  };

  const _onClickToggleSignIn = () => {
    setToggleSignIn(!toggleSignIn);
    setToggleSignUp(!toggleSignUp);
  };

  return (
    <Container>
      <Logo to="/">
        <h1>The localbookstore</h1>
      </Logo>
      {toggleSignUp && (
        <SignUpForm>
          <FormContainer>
            <LeftContainer>
              <ContentWrapper>
                <ContainerTitle>Sign Up</ContainerTitle>
                <Form>
                  <FormInputField
                    labelName="Username:"
                    inputType="text"
                    placeholder="Username"
                  />
                  <FormInputField
                    labelName="Email:"
                    inputType="email"
                    placeholder="Enter your email"
                  />
                  <FormInputField
                    labelName="Password"
                    inputType="password"
                    placeholder="Password"
                  />
                  <FormInputField
                    labelName="Confirm password"
                    inputType="password"
                    placeholder="Confirm password"
                  />

                  <BtnWrapper>
                    <Button textColor="#fff">Sign Up</Button>
                  </BtnWrapper>
                </Form>
              </ContentWrapper>
            </LeftContainer>
            <RightContainer>
              <ContentWrapper>
                <Title>Welcome back to localbookstore.in!</Title>
                <Discription1>
                  Your one shop destination for buying books.
                </Discription1>
                <Discription2>If Already register? Sign In below!</Discription2>
                <Button
                  to="/loginSystem"
                  border="true"
                  textColor="#fff"
                  onClick={_onClickToggleSignIn}
                >
                  Sign In
                </Button>
              </ContentWrapper>
            </RightContainer>
          </FormContainer>
        </SignUpForm>
      )}

      {toggleSignIn && (
        <SignInForm>
          <FormContainer reverse={true}>
            <RightContainer>
              <ContentWrapper>
                <Title>Welcome back to localbookstore.in!</Title>
                <Discription1>
                  Your one shop destination for buying books.
                </Discription1>
                <Discription2>
                  Don't hava an account? Sign Up below!
                </Discription2>
                <Button
                  to="/loginSystem"
                  border={true}
                  textColor="#fff"
                  onClick={_onClickToggleSignUp}
                >
                  Sign Up
                </Button>
              </ContentWrapper>
            </RightContainer>
            <LeftContainer>
              <ContentWrapper>
                <ContainerTitle>Sign In</ContainerTitle>
                <Form>
                  <FormInputField
                    labelName="Email:"
                    inputType="email"
                    placeholder="Enter your email"
                  />
                  <FormInputField
                    labelName="Password"
                    inputType="password"
                    placeholder="Password"
                  />
                  <BtnWrapper>
                    <Button textColor="#fff">Sign In</Button>
                  </BtnWrapper>
                </Form>
              </ContentWrapper>
            </LeftContainer>
          </FormContainer>
        </SignInForm>
      )}
    </Container>
  );
};

export default LoginSystem;
