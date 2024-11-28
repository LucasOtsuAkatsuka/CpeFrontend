import React, { useState } from 'react'
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, CloseButton, LoginButton, StyledInput} from './Styles';
import { useUpdateUser } from '../../hooks/user';


export default function ModalEditAdm({isOpen, setModalOpen, idUsuario}) {

    const{ mutate:putUser, isPending } = useUpdateUser({onSuccess: (updatedUser) => {
      useAuthStore.setState((state) => ({
          usuario: { ...state.usuario, ...updatedUser }
      }));
          setModalOpen(); 
      },
      onError: (error) => {
          console.error("Erro ao atualizar o usuário:", error);
    }});
    const [cargo, setCargo] = useState('');

    function response() {
        const data = {cargo};
        console.log(idUsuario, data);
        putUser({id: idUsuario, body: data});
        window.location.reload();
    }
  

  if(isOpen)
    return(
      <>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
            <h2>Editar Cargo</h2>
            </ModalHeader>
            <CloseButton onClick={setModalOpen}>&times;</CloseButton>
            <ModalBody>
                <StyledInput 
                    placeholder='Digite o cargo'
                    value={cargo} 
                    onChange={(e) => setCargo(e.target.value)}> 
                </StyledInput>
            </ModalBody>
            <ModalFooter>
            <LoginButton onClick={response} disabled={isPending}>{isPending ? 'Aguarde...' : 'Editar'}</LoginButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </> 
    )
    
  return null;
}
