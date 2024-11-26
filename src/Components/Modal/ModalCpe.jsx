import React from 'react'
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, CloseButton, LoginButton, StyledLink } from './Styles';
import { useCreateSessao } from '../../hooks/sessoes';
import useAuthStore from '../../stores/auth';


export default function ModalCpe({isOpen, setModalOpen}) {

  const usuarioId = useAuthStore((state) => state.usuario._id);
  

  const{ mutate:postSessao, isPending } = useCreateSessao({});

  //onSubmit
  function response() {
    const data = {"id_usuario": usuarioId};
    console.log("Dados enviados ao backend:", data);
    console.log("cheguei na funcao")
    postSessao(data);
    setModalOpen(false);
  }


  if(isOpen)
    return(
      <>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
            <h2>Você deseja mesmo fazer login?</h2>
            </ModalHeader>
            <CloseButton onClick={setModalOpen}>&times;</CloseButton>
            <ModalBody>
            <p>Tem certeza que você deseja fazer esse login?</p>
            </ModalBody>
            <ModalFooter>
            <LoginButton onClick={response} disabled={isPending}>{isPending ? 'Aguarde...' : 'Login'}</LoginButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </> 
    )
    
  return null;
}
