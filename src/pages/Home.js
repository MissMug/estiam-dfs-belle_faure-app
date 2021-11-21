import React from "react";
import FindOrPropose from "../components/FindOrPropose";

const Home = () => {
  return <FindOrPropose />;
};

// const Home = () => {
//   const [isBlue, setIsBlue] = React.useState(true);

//   const handleClick = () => {
//     setIsBlue(!isBlue);
//   };

//   return <FindOrPropose clickFunction={handleClick} isBlue={isBlue} />;
// };

export default Home;
