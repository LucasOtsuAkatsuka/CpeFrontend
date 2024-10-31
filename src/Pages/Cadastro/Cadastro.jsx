import React from 'react'
import { Header, Container, Logo, Form, Title, Input, Button, LoginLink, Pagina, InputContainer, Icon} from './Styles'
import logo from "./cpe_logo.svg";
import EyeOutlined from "@ant-design/icons";


export default function Cadastro() {
  return (
      <Pagina>
        <Header>
          <Logo src={logo} alt='logo'/>
        </Header>
        <Container>
        
          <Form>
            <Title>CADASTRO</Title>
            <Input type="text" placeholder="Nome" />
            <Input type="email" placeholder="E-mail" />
            <Input type="text" placeholder="Cargo" />
            <InputContainer>
              <Icon icon={EyeOutlined} />
              <Input type="password" placeholder="Senha"/>
            </InputContainer>
            <Input type="password" placeholder="Repita sua senha"/>
            <LoginLink>
              Já tem uma conta? Faça o login <a href="#">aqui</a>.
            </LoginLink>
            <Button>CRIAR CONTA</Button>
            
          </Form>
        </Container>
      </Pagina>
  
  )
}
