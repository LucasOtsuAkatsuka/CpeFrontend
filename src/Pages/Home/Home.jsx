import React from 'react'
import Carrossel from '../../Components/Carrossel'
import { Container, Pagina } from './Styles'
import Header from '../../Components/Header';

export default function Home() {

  return (
    <Pagina>
      <Header/>
      <Container>
        <Carrossel/>
      </Container>
    </Pagina>
  )
}
