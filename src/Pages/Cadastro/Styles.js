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
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #000;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;

  h2{
    color: #ffdb00;
    margin-bottom: 20px;
    font-size: 60px;
  }

  @media (max-width: 1000px) {
    width: 70%;
  }
`;

export const LoginLink = styled.p`
  color: #fff;
  font-size: 14px;
  margin-top: 10px;

  a {
    color: #ffdb00;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;