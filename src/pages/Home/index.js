import React from "react";
import BookCards from "./BookCards";
import FindOrPropose from "./FindOrPropose";

const Home = () => {
  const [isBlue, setIsBlue] = React.useState(true);

  const handleClick = () => {
    setIsBlue(!isBlue);
  };

  return (
    <div style={{ padding: "8px", background: isBlue ? "blue" : "red" }}>
      <FindOrPropose clickFunction={handleClick} isBlue={isBlue} />
      <BookCards />
    </div>
  );
};

export default Home;
