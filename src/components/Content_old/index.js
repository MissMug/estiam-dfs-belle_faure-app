import React from "react";
import styled from "styled-components";
//import BookItem from "../BookItem";
import BooksShopping from "../BooksShopping";
// import { Home } from "../../pages";
// import BookCards from "../../pages/Home/BookCards";
import BookFind from "../BookFind";

const Content_old = () => {
  return (
    <ContentStyled>
      <BookFind />
      <BooksShopping />
    </ContentStyled>
  );
};

export default Content_old;

const ContentStyled = styled.div`
  border-left: solid 6px rgb(31, 97, 141);
`;
