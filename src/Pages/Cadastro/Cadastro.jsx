import React from 'react'
import {Container, LoginLink, Pagina, InputContainer, Icon, StyledForm} from './Styles'
import EyeOutlined from "@ant-design/icons";
import ImputForm from '../../Components/Input/ImputForm';
import ButtonForm from '../../Components/ButtonForm';
import Header from '../../Components/Header';



export default function Cadastro() {
  return (
      <Pagina>
        <Header/>
        <Container>
        
          <StyledForm>
              <h2>CADASTRAR</h2>
              <ImputForm type="text" placeholder="Nome" />
              <ImputForm type="email" placeholder="E-mail" />
              <ImputForm type="text" placeholder="Cargo" />
              <InputContainer>
                <Icon icon={EyeOutlined} />
                <ImputForm type="password" placeholder="Senha"/>
              </InputContainer>
              <ImputForm type="password" placeholder="Repita sua senha"/>
              <LoginLink>
                Já tem uma conta? Faça o login <a href="#">aqui</a>.
              </LoginLink>
              <ButtonForm text="CRIAR CONTA"></ButtonForm>
          </StyledForm>
            
            
          
        </Container>
      </Pagina>
  
  )
}
