import React from 'react'
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, CloseButton, LoginButton, StyledLink } from './Styles';


export default function ModalCpe({isOpen, setModalOpen}) {

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
            <LoginButton><StyledLink to="/login">Login</StyledLink></LoginButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </> 
    )
    
  return null;
}
