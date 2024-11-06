import styled from "styled-components";


export const StyledHeader = styled.header`
  background-color: #ffe712;
  width: 100%;
  padding: 2% 6%;

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