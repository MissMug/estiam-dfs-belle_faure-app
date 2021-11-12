import React from "react";
import FooterStyled from "./Styles/footerStyle";

const Footer = () => {
  const linkAcceuil = "Acceuil";
  return (
    <FooterStyled>
      {linkAcceuil} <br />
      Mentions légales <br />
      Nous contacter <br />
    </FooterStyled>
  );
};

export default Footer;
