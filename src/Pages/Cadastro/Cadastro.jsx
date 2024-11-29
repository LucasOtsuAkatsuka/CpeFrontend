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

  const {
    handleSubmit,
    register,
    formState: {errors},
    watch
  } = useForm({});

  const{ mutate:postUser, isPending } = useCreateUser({});

  const senha = watch("senha");

  function response(data) {
    postUser(data);
    navigate("/login", { replace: true });
  }

  return (
      <Pagina>
        <Container>
          <StyledForm onSubmit={handleSubmit(response)}>
              <h2>CADASTRO</h2>
              <ImputForm 
            {...register("nome", { required: "O campo Nome é obrigatório" })} 
            type="text" 
            placeholder="Nome" 
          />
          {errors.nome && <span style={{color:'red'}}>{errors.nome.message}</span>}
          
          <ImputForm 
            {...register("email", { 
              required: "O campo E-mail é obrigatório", 
              pattern: { 
                value: /^[^@]+@[^@]+\.[^@]+$/, 
                message: "E-mail inválido" 
              } 
            })} 
            type="email" 
            placeholder="E-mail" 
          />
          {errors.email && <span style={{color:'red'}}>{errors.email.message}</span>}
          
          <ImputForm 
            {...register("cargo", { required: "O campo Cargo é obrigatório" })} 
            type="text" 
            placeholder="Cargo" 
          />
          {errors.cargo && <span style={{color:'red'}}>{errors.cargo.message}</span>}
          
          <ImputForm 
            {...register("status", { required: "O campo Status é obrigatório" })} 
            type="text" 
            placeholder="Status" 
          />
          {errors.status && <span style={{color:'red'}}>{errors.status.message}</span>}
          
          <InputPassword 
            {...register("senha", { 
              required: "O campo Senha é obrigatório", 
              minLength: { 
                value: 6, 
                message: "A senha deve ter no mínimo 6 caracteres" 
              } 
            })} 
            placeholder="Senha"
          />
          {errors.senha && <span style={{color:'red'}}>{errors.senha.message}</span>}
          
          <ImputForm 
            {...register("confirmarSenha", { 
              required: "O campo Repita sua senha é obrigatório", 
              validate: value => 
                value === senha || "As senhas não correspondem" 
            })} 
            type="password" 
            placeholder="Repita sua senha" 
          />
          {errors.confirmarSenha && <span style={{color:'red'}}>{errors.confirmarSenha.message}</span>}
              <LoginLink>
                Já tem uma conta? Faça o login <Link to="/login" >aqui</Link>.
              </LoginLink>
              <ButtonForm text="CRIAR CONTA"></ButtonForm>
          </StyledForm>
          
        </Container>
      </Pagina>
  
  )
}
