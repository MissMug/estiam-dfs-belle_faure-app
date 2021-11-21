import BookItem from "../BookItem";
import styled from "styled-components";

import conditionHumaine from "../../pictures/conditionHumaine.jpg";
import etranger from "../../pictures/etranger.jpg";
import harryPotterEcoleSorcier from "../../pictures/harryPotterEcoleSorcier.jpg";
import leParfum from "../../pictures/leParfum.jpg";
import petitPrince from "../../pictures/petitPrince.jpg";
import shining from "../../pictures/shining.jpg";
import voyageCentreTerre from "../../pictures/voyageCentreTerre.jpg";

const BooksShopping = () => {
  return (
    <BooksShoppingStyle>
      <BookItem
        titleBook="Voyage au Centre de la Terre"
        authorBook="Jules Verne"
        typeBook="Classique"
        imageBook={voyageCentreTerre}
        pointNumberBook="🌳🌳🌳"
      />
      <BookItem
        titleBook="Le Parfum"
        authorBook="Patrick Süskind"
        typeBook="Littérature étrangère"
        imageBook={leParfum}
        pointNumberBook="🌳🌳"
      />
      <BookItem
        titleBook="Shining"
        authorBook="Stephen King"
        typeBook="Horreur"
        imageBook={shining}
        pointNumberBook="🌳"
      />
      <BookItem
        titleBook="L'étranger"
        authorBook="Albert Camus"
        typeBook="Classique"
        imageBook={etranger}
        pointNumberBook="🌳"
      />
      <BookItem
        titleBook="La Condition Humaine"
        authorBook="André Malraux"
        typeBook="Classique"
        imageBook={conditionHumaine}
        pointNumberBook="🌳🌳"
      />
      <BookItem
        titleBook="Harry Potter à l'Ecole des Sorciers"
        authorBook="J.K. Rowling"
        typeBook="Enfance"
        imageBook={harryPotterEcoleSorcier}
        pointNumberBook="🌳🌳🌳"
      />
      <BookItem
        titleBook="Le Petit Prince"
        authorBook="Antoine de Saint-Exupery"
        typeBook="Enfance"
        imageBook={petitPrince}
        pointNumberBook="🌳🌳🌳"
      />
    </BooksShoppingStyle>
  );
};

const BooksShoppingStyle = styled.div`
  padding: 20px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export default BooksShopping;
