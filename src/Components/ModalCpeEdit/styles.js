import styled from 'styled-components';

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
  max-width: 500px;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 15px;
  margin-top: 20px;

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
  padding: 0 0 25px 0;

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
  border: 2px solid #F19709;
  border-radius: 5px;
  color: #F19709;
  font-size: 13px;
  padding: 10px 70px;
  cursor: pointer;

  &:hover {
    background: #F19709;
    color: #fff;
  }
`;
