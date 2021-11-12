import React from "react";
import livreLogo from "../../pictures/livreLogo.png";
import HeaderStyled from "./Styles/headerStyle";
import MenuContainer from "./Styles/menuContainer";
import ImageLogo from "./Styles/imageLogo";
import NomAppliContainer from "./Styles/nomAppliContainer";
import NomLogoContainer from "./Styles/nomLogoContainer";
import styled from "styled-components";

const Menu = () => {
  return (
    <MenuContainer>
      <ul>
        <li>Books Find</li>
        <li>Books Propose</li>
        <li>Users</li>
        <li>My account</li>
      </ul>
    </MenuContainer>
  );
};

const LogoNom = () => {
  return (
    <NomLogoContainer>
      <NomAppliContainer>
        <ImageLogo src={livreLogo} alt="LogoLivre" />
        <div>BookOChange</div>
      </NomAppliContainer>
    </NomLogoContainer>
  );
};

const User = () => {
  return (
    <LogMenu>
      <ul>
        <p>Mon compte BookOChange</p>
        <EmailMdPForm>email</EmailMdPForm>
        <EmailMdPForm>Mot de passe</EmailMdPForm>
        <ConnexionButton>Connexion</ConnexionButton>
      </ul>
    </LogMenu>
  );
};

const LogMenu = styled.div`
  background-color: #eaf2f8;
  padding: 5px;
  border: 1px solid #2980b9;
  border-radius: 5px;
`;

const EmailMdPForm = styled.form`
  background-color: white;
  border: 1px solid #2980b9;
  border-radius: 5px;
  padding: 2px;
`;

const ConnexionButton = styled.button`
  background-color: #5499c7;
  border-color: #2980b9;
  border-radius: 5px;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <Menu />
      <LogoNom />
      <User />
    </HeaderStyled>
  );
};

export default Header;
