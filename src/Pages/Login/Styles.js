import styled from "styled-components";
import { EyeOutlined } from "@ant-design/icons"

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

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Icon = styled(EyeOutlined)`
  position: absolute;
  top: 50%;
  left: 94%;
  transform: translateY(-50%);
  color: #000;
  font-size: 25px;
  background-color: #f5f5f5;

  @media (max-width: 1300px ) and (min-width: 1001px) {
    left: 90%;
  }

  @media (max-width: 1000px ) and (min-width: 601px) {
    left: 94%;
  }

  @media (max-width: 600px ) and (min-width: 300px) {
    left: 85%;
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