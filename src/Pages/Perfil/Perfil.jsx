import React, { useEffect, useState } from 'react'
import {Pagina, StyledDiv, Container, StyledButton, StyledDados, StyledDado, StyledValor} from './Styles'
import useAuthStore from '../../stores/auth'
import Usuario from '../../Components/Usuario';
import ModalCpeEdit from '../../Components/ModalCpeEdit';


export default function Perfil() {

  const [openModal, setOpenModal] = useState(false);
  const usuarioAtual = useAuthStore((state) => state.usuario);
  const [user, setUser] = useState(usuarioAtual);

  useEffect(() => {
    setUser(usuarioAtual);
  }, [usuarioAtual]);

  return (
      <Pagina>
        <Container>
          <h1>PERFIL</h1>
          <StyledDiv>
            <Usuario ></Usuario>
          </StyledDiv>
          <StyledButton onClick={() => setOpenModal(true)}>EDITAR</StyledButton>
          <ModalCpeEdit isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
        </Container>
     </Pagina>
  )
}