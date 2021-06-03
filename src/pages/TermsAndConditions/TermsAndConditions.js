import React from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import termsACData from "../../data/termsACData";

const TermsAndConditions = () => {
  const lastDateOfUpdating = "March 25, 2021";
  return (
    <>
      <MainContainer>
        <h1>Terms and Conditions last updated: {lastDateOfUpdating}</h1>
        {termsACData.map((para, index) => (
          <div key={index}>
            <h2>{para.title}</h2>
            <h3>{para.subtitle}</h3>
            <p>{para.p}</p>
          </div>
        ))}
        <p>
          By email: office@mycompany.com <br></br>
        </p>
        <p>
          By visiting this page on our website:
          <a href="/contactus">http://www.localbookstore.in/contact</a> Terms
          and Conditions for Localbookstore.in
        </p>
      </MainContainer>
      <Footer />
    </>
  );
};

export default TermsAndConditions;

const MainContainer = styled.div`
  width: 80.9999%;
  margin: 15rem auto 5rem auto;

  h1 {
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 3rem;
  }
`;
