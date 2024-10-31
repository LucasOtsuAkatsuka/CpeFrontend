import styled from "styled-components";
import { EyeOutlined } from "@ant-design/icons"

export const Pagina = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #000;
`;

export const Header = styled.header`
  background-color: #ffe712;
  width: 100%;
  padding: 2% 6%;
    
`;

export const Logo = styled.img`
  font-size: 5px;
  width: 200px;
  font-weight: bold;
  color: #000;

  @media (max-width: 1300px ) and (min-width: 1001px) {
    width: 180px;
  }

  @media (max-width: 1000px ) and (min-width: 601px) {
    width: 150px;
  }

  @media (max-width: 600px ) and (min-width: 300px) {
    width: 120px;
    padding-top: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  background-color: #000;

  @media (max-width: 1000px) {
    width: 70%;
  }
`;

export const Title = styled.h2`
  color: #ffdb00;
  margin-bottom: 20px;
  font-size: 60px;
`;

export const Icon = styled(EyeOutlined)`
  position: absolute;
  top: 50%;
  left: 94%;
  transform: translateY(-50%);
  color: #000;
  font-size: 25px;

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

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 10px 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 25px;
  border: none;
  background-color: #f5f5f5;
  color: #000;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 70%;
  padding: 15px;
  border-radius: 20px;
  border: none;
  background-color: #ffe712;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;

  &:hover {
    background-color: #e6c200;
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