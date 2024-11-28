import styled, {css} from "styled-components";
import { Link } from "react-router-dom";


export const StyledHeader = styled.header`
  position: relative;
  background-color: #ffe712;
  width: 100%;
  padding: 2% 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;



  img{
    font-size: 5px;
    width: 200px;
    font-weight: bold;
    color: #000;
    background-color: #ffe712;

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
  }
`;

export const StyledDivs1 = styled.div`
  display:flex;
  justify-content: space-between;
  width: 30%;
  font-weight: bold;
  @media (max-width: 1400px) {
    width: 40%;
  }
  @media (max-width: 1000px) {
    display: none; 
  }
`;

export const StyledDivs2 = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (max-width: 1000px) {
    display: none; 
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 140%;
  transition: transform 0.2s;
  border: none;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledButton = styled.button`
  right: 10px;
  cursor: pointer;
  color: #555;
  text-decoration: none;
  border: none;
  padding: 5px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
  background-color: #ffe712;


  &:hover {
    background-color: yellow; 
  }
`

export const StyledMenuButton = styled.button`
  position: absolute;
  right: 2rem;
  cursor: pointer;
  font-size: 2.5rem;
  border: none;
  padding: 0;
  text-decoration: none;
  background-color: #ffe712;
  @media (max-width: 1000px) {
    display: block; 
  }
  @media (min-width: 1001px) {
    display: none;  
  }
`

export const StyledButtonMobile = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 5px;
  right: 2rem;
  cursor: pointer;
  font-size: 1.5rem;
  border: none;
  padding: 0;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0)
`

export const StyledMenuNav = styled.div`
  position: absolute;
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100vh;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  background: rgb(0,12,14);
  background: linear-gradient(90deg, rgba(0,12,14,1) 0%, rgba(255,248,4,1) 0%, rgba(108,121,9,0.6138830532212884) 95%);


  >svg {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      transition: transform 1s;

      &:hover{
        transform: scale(1.1);
      }
  }

  nav{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1.5rem;
  }

  ${({ visivel }) =>
    visivel &&
    css`
      opacity: 1;
      pointer-events: all;
      transform: translateX(0);
      transition: transform 0.3s ease-in-out;
    `}
  ${({ visivel }) =>
    !visivel &&
    css`
      opacity: 0;
      pointer-events: none;
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;
    `}
`

