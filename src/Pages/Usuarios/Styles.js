import styled from "styled-components";

export const Pagina = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #000;

  .nomesMap{
    color: #fff;
    margin-top: 40px;
  }
`;

export const StyledTitulo = styled.h1`
    color: #FFD700;
    margin-top: 5%;
`

export const ButtonModalLogin = styled.button`
  position: absolute;
  top: 59%;
  right: 19%;
  padding: 5px 10px;
  background-color: #000;
  border: 1px solid #FFD700;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

    
  @media (max-width: 1920px) {
    top: 59%;
    right: 19%;
  }

  
  @media (max-width: 1366px) {
    top: 60%;
    right: 15%;
  }

  
  @media (max-width: 1280px) {
    top: 62%;
    right: 14%;
  }

  
  @media (max-width: 1024px) {
    top: 63%;
    right: 10%;
    padding: 6px 8px;
  }

  
  @media (max-width: 768px) {
    top: 65%;
    right: 8%;
    padding: 6px 7px;
  }

  
  @media (max-width: 480px) {
    top: 66%;
    right: 5%;
    font-size: 12px;
  }

 
  @media (max-width: 320px) {
    top: 68%;
    right: 4%;
    font-size: 10px;
    padding: 4px 6px;
  }
`;