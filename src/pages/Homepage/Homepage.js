import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Homepage = () => {
  return (
    <Container>
      <h1>Homepage</h1>
    </Container>
  );
};

export default Homepage;
