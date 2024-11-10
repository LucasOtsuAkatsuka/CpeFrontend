import React from 'react'
import { Link } from 'react-router-dom';
import {Container, LoginLink, Pagina, StyledForm} from './Styles'
import ImputForm from '../../Components/Input/ImputForm';
import ButtonForm from '../../Components/ButtonForm';
import Header from '../../Components/Header';
import InputPassword from '../../Components/InputPassword';


export default function Cadastro() {
  return (
      <Pagina>
        <Header/>
        <Container>
        
          <StyledForm>
              <h2>CADASTRO</h2>
              <ImputForm type="text" placeholder="Nome" />
              <ImputForm type="email" placeholder="E-mail" />
              <ImputForm type="text" placeholder="Cargo" />
              <InputPassword type="password" placeholder="Senha"/>
              <ImputForm type="password" placeholder="Repita sua senha"/>
              <LoginLink>
                Já tem uma conta? Faça o login <Link to="/login" >aqui</Link>.
              </LoginLink>
              <ButtonForm text="CRIAR CONTA"></ButtonForm>
          </StyledForm>
            
            
          
        </Container>
      </Pagina>
  
  )
}
