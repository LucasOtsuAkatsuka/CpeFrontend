import React from 'react'
import { Link } from 'react-router-dom';
import {Container, LoginLink, Pagina, InputContainer, Icon, StyledForm} from './Styles'
import EyeOutlined from "@ant-design/icons";
import ImputForm from '../../Components/Input/ImputForm';
import ButtonForm from '../../Components/ButtonForm';
import Header from '../../Components/Header';


export default function Login() {

  return (
    <Pagina>
        <Header/>
        <Container>
          <StyledForm>
              <h2>LOGIN</h2>
              <ImputForm type="email" placeholder="E-mail" />
              <InputContainer>
                <Icon icon={EyeOutlined} />
                <ImputForm type="password" placeholder="Senha"/>
              </InputContainer>
              <LoginLink>
                Não tem login? Faça seu cadastro <Link to="/cadastro">aqui</Link>.
              </LoginLink>
              <ButtonForm text="CRIAR CONTA"></ButtonForm>
          </StyledForm>
        </Container>
      </Pagina>
  )
}
