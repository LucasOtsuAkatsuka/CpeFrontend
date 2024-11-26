import React, { useState } from 'react'
import { Pagina, StyledDiv, Container, StyledButton} from './Styles'
import useAuthStore from '../../stores/auth'
import Usuario from '../../Components/Usuario';
import ModalCpeEdit from '../../Components/ModalCpeEdit';


export default function Perfil() {

  const usuario = useAuthStore((state) => state.usuario);
  const [openModal, setOpenModal] = useState(false);

  return (
      <Pagina>
        <Container>
          <h1>PERFIL</h1>
          <StyledDiv>
            <Usuario usuario={usuario}/>
          </StyledDiv>
          <StyledButton onClick={() => setOpenModal(true)}>EDITAR</StyledButton>
          <ModalCpeEdit isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
        </Container>
     </Pagina>
  )
}
