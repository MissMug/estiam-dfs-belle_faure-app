import React from "react";
import livreLogo from "../../pictures/livreLogo.png";
import HeaderStyled from "./Styles/headerStyle";
import MenuContainer from "./Styles/Menu/menuContainer";
import ImageLogo from "./Styles/LogoNom/imageLogo";
import NomAppliContainer from "./Styles/LogoNom/nomAppliContainer";
import NomLogoContainer from "./Styles/LogoNom/nomLogoContainer";
import ConnexionButton from "./Styles/User/connexionButton";
import EmailMdPForm from "./Styles/User/emailMdPForm";
import LogMenu from "./Styles/User/logMenu";

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
      <p>Mon compte BookOChange</p>
      <EmailMdPForm>email</EmailMdPForm>
      <EmailMdPForm>Mot de passe</EmailMdPForm>
      <ConnexionButton>Connexion</ConnexionButton>
    </LogMenu>
  );
};

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
