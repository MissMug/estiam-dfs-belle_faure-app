import React from "react";
import styled from "styled-components";
//import BookItem from "../BookItem";
import BooksShopping from "../BooksShopping";
// import { Home } from "../../pages";
// import BookCards from "../../pages/Home/BookCards";

const FindOrPropose = (props) => {
  return (
    <>
      <ButtonFindOrPropose>Trouver un livre</ButtonFindOrPropose>
      <ButtonFindOrPropose>Proposer un livre</ButtonFindOrPropose>
    </>
  );
};

const Content = () => {
  return (
    <ContentStyled>
      <ButtonsContainer>
        <FindOrPropose />
      </ButtonsContainer>
      <BooksShopping />
    </ContentStyled>
  );
};

export default Content;

const ContentStyled = styled.div`
  border-left: solid 6px rgb(31, 97, 141);
`;

const ButtonsContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: solid 3px rgb(31, 97, 141);
`;

const ButtonFindOrPropose = styled.button`
  border: 10;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  background-color: #5499c7;
`;

// import React from "react";
// import { Home } from "../../pages";

// const Content = () => {
//   return <Home />;
// };

// export default Content;
