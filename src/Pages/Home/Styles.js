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

export const StyledDiv = styled.div`
  width: 100%;
  margin-top: 2%;
`

export const ButtonModalLogin = styled.button`
  margin-left: 75%;
  margin-bottom: 0;
  padding: 5px 10px;
  background-color: #000;
  border: 1px solid #FFD700;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

    
  @media (max-width: 1920px) {
    margin-left: 75%;
    margin-bottom: 0;
  }

  @media (max-width: 1800px) {
    margin-left: 77%;
    margin-bottom: 0;
  }

  @media (max-width: 1700px) {
    margin-left: 77%;
    margin-bottom: 0;
  }

  @media (max-width: 1600px) {
    margin-left: 77%;
    margin-bottom: 0;
  }


  @media (max-width: 1550px) {
    margin-left: 80%;
    margin-bottom: 0;
  }
  
  @media (max-width: 1366px) {
    margin-left: 80%;
    margin-bottom: 0;
  }

  
  @media (max-width: 1280px) {
    margin-left: 80%;
    margin-bottom: 0;
  }

  
  @media (max-width: 1024px) {
    margin-left: 80%;
    margin-bottom: 0;
  }

  @media (max-width: 900px) {
    margin-left: 80%;
    margin-bottom: 0;
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
`



