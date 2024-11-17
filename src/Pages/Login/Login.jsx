import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {Container, LoginLink, Pagina, StyledForm} from './Styles'
import ImputForm from '../../Components/Input/ImputForm';
import ButtonForm from '../../Components/ButtonForm';
import Header from '../../Components/Header';
import api from '../../Services/api';
import InputPassword from '../../Components/InputPassword';
import useAuthStore from '../../stores/auth';


export default function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const token = useAuthStore((state) => state.token)
  const usuario = useAuthStore((state) => state.usuario)
  const setToken = useAuthStore((state) => state.setToken);
  console.log({token, usuario});

  //console.log({email, senha})

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setCarregando(true);
      const res = await api.post("/login", {email, senha});
      const {token} = res.data;
      setToken(token);
      //console.log(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.message);
    } finally {
      setCarregando(false);
    }
  }

  if (carregando) return (<Container>
    <h1>Carregando...</h1>
  </Container>)

  return (
    <Pagina>
        <Header/>
        <Container>
          <StyledForm onSubmit={handleSubmit}>
              <h2>LOGIN</h2>
              <ImputForm type="email" placeholder="E-mail" required onChange={(e)=>setEmail(e.target.value)}/>
              <InputPassword type="password" placeholder="Senha" required onChange={(e)=>setSenha(e.target.value)}></InputPassword>
              
              <LoginLink>
                Não tem login? Faça seu cadastro <Link to="/cadastro">aqui</Link>.
              </LoginLink>
              <ButtonForm type="submit" text="CRIAR CONTA"></ButtonForm>
          </StyledForm>
        </Container>
      </Pagina>
  )
}
