import styled from "styled-components";

export const StyledBotaoPadrao = styled.button`
    display: inline-block;
    font-size: 12px 24px;
    font-weight: bold;
    text-align:center;
    color: #ffffff;
    background-color: #3f51b5;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover{
        background-color: #303f9f;
    }
`;