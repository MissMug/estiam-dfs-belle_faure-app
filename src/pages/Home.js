import React from "react";
import BookShopping from "../components/BooksShopping";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <BookShopping />
    </Container>
  );
};

const Container = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
`;

export default Home;
