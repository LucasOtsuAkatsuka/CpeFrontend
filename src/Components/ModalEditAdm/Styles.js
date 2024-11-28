import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
    position: relative; 
  background: #fff;
  width: 80%;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;   
`;


export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 15px;

  h2 {
    margin: 0;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 18px;
    color: #333;
  }
`;

export const ModalBody = styled.div`
  padding: 20px;
  font-size: 16px;
  color: #555;
  text-align: center;
`;

// Footer do modal com o botão
export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;

`;


export const CloseButton = styled.button`
  position: absolute; 
  top: 10px; 
  right: 10px; 
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;


export const LoginButton = styled.button`
  background: #fff;
  border: 1px solid #F19709;
  border-radius: 5px;
  color: #F19709;
  font-size: 13px;
  padding: 2px 20px;
  cursor: pointer;

  &:hover {
    background: #F19709;
    color: #fff;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none; 
  color: inherit; 
  font-weight: bold;

  &:hover {
    color: #fff; 
  }
`

export const StyledInput = styled.input`
    padding: 2%;
    border-radius: 10px;
    border: solid 2px;
    border-color: black;
`