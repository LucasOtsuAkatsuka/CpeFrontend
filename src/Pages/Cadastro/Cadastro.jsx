import React from 'react'
import { Link } from 'react-router-dom';
import {Container, LoginLink, Pagina, StyledForm} from './Styles'
import ImputForm from '../../Components/Input/ImputForm';
import ButtonForm from '../../Components/ButtonForm';
import InputPassword from '../../Components/InputPassword';
import { useForm } from "react-hook-form";
import { useCreateUser } from '../../hooks/user';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {

  const navigate = useNavigate()

  //Hooks
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({});

  const{ mutate:postUser, isPending } = useCreateUser({});

  //onSubmit
  function response(data) {
    console.log("Dados enviados ao backend:", data);
    console.log("cheguei na funcao")
    postUser(data);
    navigate("/login", { replace: true });
  }

  return (
      <Pagina>
        <Container>
          <StyledForm onSubmit={handleSubmit(response)}>
              <h2>CADASTRO</h2>
              <ImputForm  {...register("nome")} type="text" placeholder="Nome" />
              <ImputForm  {...register("email")} type="email" placeholder="E-mail" />
              <ImputForm  {...register("cargo")} type="text" placeholder="Cargo" />
              <ImputForm  {...register("status")} type="text" placeholder="Status" />
              <InputPassword  {...register("senha")} type="password" placeholder="Senha"/>
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
