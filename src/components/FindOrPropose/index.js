import React from "react";
import styled from "styled-components";

const FindOrPropose = (props) => {
  return (
    <ButtonsContainer>
      <ButtonFindOrPropose>Trouver un livre</ButtonFindOrPropose>
      <ButtonFindOrPropose>Proposer un livre</ButtonFindOrPropose>
    </ButtonsContainer>
  );
};

// const FindOrPropose = (props) => {
//   return (
//     <ButtonsContainer>
//       <button onClick={props.clickFunction}>
//         {props.isBlue ? "Mettre en ROUGE" : "Mettre en BLEU"}
//       </button>

//       <button>Rejoindre</button>
//     </ButtonsContainer>
//   );
// };

const ButtonsContainer = styled.div`
  height: 400px;
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

export default FindOrPropose;
