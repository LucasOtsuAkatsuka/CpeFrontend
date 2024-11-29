import React from 'react'
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, CloseButton, LoginButton} from './styles';
import { useDeleteUser } from '../../hooks/user';
import useAuthStore from '../../stores/auth';



export default function ModalDeleteUsuario({isOpen, setModalOpen, idUsuario}) {
  
  const{ mutate:deleteUsuario, isPending} = useDeleteUser({});

  function destroyUsuario() {
    deleteUsuario(idUsuario);
    window.location.reload();
    setModalOpen(false);
}

  

  if(isOpen)
    return(
      <>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
            <h2>Excluir Usuário</h2>
            </ModalHeader>
            <CloseButton onClick={setModalOpen}>&times;</CloseButton>
            <ModalBody>
            <p>Tem certeza que você deseja excluir esse usuário?</p>
            </ModalBody>
            <ModalFooter>
            <LoginButton onClick={() => {destroyUsuario()}} disabled={isPending}>{isPending ? 'Aguarde...' : 'Excluir'}</LoginButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </> 
    )
    
  return null;
}
