import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Erreur 404</h1>
      <Link to="/">Veuillez cliquer ici 😊</Link>
    </div>
  );
};

export default NotFound;
