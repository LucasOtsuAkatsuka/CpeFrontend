import React from 'react'
import { Link } from 'react-router-dom';
import { StyledHeader } from './Styles'

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Link to="/">
              <img src='../../../public/Imagens/cpe_logo.svg' alt='Logo'/>
        </Link>
      </StyledHeader>
    </>
  )
}
