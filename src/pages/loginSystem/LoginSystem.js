import React, { useState } from "react";
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
  position: absolute;
  transition: all 0.5s ease;
`;

const ContainerTitle = styled.h1`
  color: ${darkPrimaryColor};
  margin-bottom: 2rem;
`;
const LeftContainer = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const Discription1 = styled.p`
  color: ${whiteShade};
  text-align: center;
  font-size: clamp(1rem, 8vw, 1.2rem);
  margin-bottom: 3rem;
`;

const Discription2 = styled.p`
  color: ${whiteShade};
  text-align: center;
  font-size: clamp(1rem, 8vw, 1rem);
  margin-bottom: 1.5rem;
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
