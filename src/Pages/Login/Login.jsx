import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {Container, LoginLink, Pagina, InputContainer, Icon, StyledForm} from './Styles'
import EyeOutlined from "@ant-design/icons";
import ImputForm from '../../Components/Input/ImputForm';
import ButtonForm from '../../Components/ButtonForm';
import Header from '../../Components/Header';


export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //console.log({email, senha})

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({email, senha});
  }

  return (
    <Pagina>
        <Header/>
        <Container>
          <StyledForm onSubmit={handleSubmit}>
              <h2>LOGIN</h2>
              <ImputForm type="email" placeholder="E-mail" required onChange={(e)=>setEmail(e.target.value)}/>
              <InputContainer>
                <Icon icon={EyeOutlined} />
                <ImputForm type="password" placeholder="Senha" required onChange={(e)=>setSenha(e.target.value)}/>
              </InputContainer>
              <LoginLink>
                Não tem login? Faça seu cadastro <Link to="/cadastro">aqui</Link>.
              </LoginLink>
              <ButtonForm type="submit" text="CRIAR CONTA"></ButtonForm>
          </StyledForm>
        </Container>
      </Pagina>
  )
}
