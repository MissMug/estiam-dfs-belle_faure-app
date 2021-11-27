import React from "react";
import styled from "styled-components";
import AddToCart from "../AddToCart";

const BookItem = (props) => {
  const [isAdd, setIsAdd] = React.useState(true);

  const handleClick = () => {
    setIsAdd(!isAdd);
  };

  return (
    <ItemBook>
      <img src={props.imageBook} height="auto" width="auto" alt="Couv. Livre" />
      <TitleBook>Titre : {props.titleBook}</TitleBook>
      <AuthorBook>Auteur : {props.authorBook}</AuthorBook>
      Genre : {props.typeBook} <br />
      Valeur : {props.pointNumberBook} point(s)
      <AddToCart clickFunction={handleClick} isAdd={isAdd} />
    </ItemBook>
  );
};

const TitleBook = styled.div`
  color: #1a5276;
  font-weight: bold;
  text-align: center;
`;

const AuthorBook = styled.div`
  color: #2471a3;
  padding: 5px;
`;

const ItemBook = styled.div`
  padding: 20px;
  display: flex;
  align-items: safe center;
  justify-content: center;
  flex-direction: column;
  width: 280px;
  height: 250px;
  border: 4px solid #2471a3;
  border-radius: 20px;
`;

export default BookItem;
