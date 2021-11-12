import React from "react";
import styled from "styled-components";

const BookItem = (props) => {
  return (
    <ItemBook>
      <img
        src={props.imageBook}
        height="auto"
        width="auto"
        text-align="center"
        alt="Couv. Livre"
      />
      <TitleBook>Titre : {props.titleBook}</TitleBook>
      <AuthorBook>Auteur : {props.authorBook}</AuthorBook>
      Genre : {props.typeBook} <br />
      Valeur : {props.pointNumberBook} point(s)
      <ButtonStyle>Ajouter</ButtonStyle>
    </ItemBook>
  );
};

const ButtonStyle = styled.button`
  border: 10;
  line-height: 1.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: #fff;
  border-radius: 10px;
  background-color: #5499c7;
`;

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
  width: 180px;
  height: 200px;
  border: 4px solid #2471a3;
  border-radius: 20px;
`;

export default BookItem;
