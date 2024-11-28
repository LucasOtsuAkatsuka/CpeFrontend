import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { StyledButtonMobile,StyledHeader, StyledDivs1, StyledDivs2, StyledLink, StyledButton, StyledMenuNav, StyledMenuButton} from './Styles'
import useAuthStore from '../../stores/auth';
import { IoIosLogOut } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const usuario = useAuthStore((state) => state.usuario);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const [menuVisivel, setMenuVisivel] = useState(false);

  

  const toggleMenu = () => {
    setMenuVisivel(!menuVisivel);
  }

  return (
    <>
      <StyledHeader>
        <Link to="/">
              <img src='../../../public/Imagens/cpe_logo.svg' alt='Logo'/>
        </Link>
        

        {!!usuario && (<>

          <StyledMenuButton onClick={toggleMenu}>
            <IoMenu size={28}/>
          </StyledMenuButton>
          
          {menuVisivel && (
            <StyledMenuNav visivel={menuVisivel}>
              <IoCloseSharp size={45} onClick={toggleMenu}/>
              <nav>
                <h2>Bem-vindo, {usuario.nome}</h2>
                <StyledLink to="/" onClick={toggleMenu}>HOME</StyledLink>
                <StyledLink to="/perfil" onClick={toggleMenu}>PERFIL</StyledLink>
                <StyledLink to="/usuarios" onClick={toggleMenu}>USUARIOS</StyledLink>
                <StyledButtonMobile type='button' onClick={clearAuth}><IoIosLogOut/>Sair</StyledButtonMobile>
              </nav>
            </StyledMenuNav>
          )}
          
          <StyledDivs1>
            <StyledLink to="/">HOME</StyledLink>
            <StyledLink to="/perfil">PERFIL</StyledLink>
            <StyledLink to="/usuarios">USUARIOS</StyledLink>
          </StyledDivs1>
          <StyledDivs2>
            <h2>Bem-vindo, {usuario.nome}</h2>
            <StyledButton type='button' onClick={clearAuth}><IoIosLogOut/></StyledButton>
          </StyledDivs2>
        </>)}
      </StyledHeader>
    </>
  )
}
