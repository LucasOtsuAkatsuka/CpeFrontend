import styled from "styled-components";

export const Pagina = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    color: #ffe712;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #000;
  flex-direction: column;
  gap: 20px;

  h1 {
    margin-bottom: 30px;
  }
`;

export const StyledDiv = styled.div`
    background-color: gray;
    padding: 3% 7%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;
`


export const StyledButton = styled.button`
  margin-top: 20px;
  background-color: #ffe712; 
  padding: 0.9% 4%;
  text-decoration: none;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
`