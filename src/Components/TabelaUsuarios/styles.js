import styled from 'styled-components';
import { Table } from 'antd';
import { Select } from 'antd';

export const StyledTabela = styled(Table)`
  .ant-table {
    background-color: black;
    width: 1200px;
    max-width: 1200px;
    margin: 30px auto auto auto;

    &:hover {
        background-color: black !important;
    }
  }

  .ant-table-thead > tr > th {
    background-color: black;
    color: white;
    font-weight: bold;
    text-align: center;
    border-right: none;

  }

  .ant-table-tbody > tr > td {
    background-color: black;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;
    word-wrap: break-word;

  }

  .ant-table-tbody td:first-child {
    text-align: left;
  }

  .ant-table-tbody td:nth-child(2),
  .ant-table-tbody td:nth-child(3) {
    text-align: center;
  }

  .ant-table-tbody td:nth-child(2) div,
  .ant-table-tbody td:nth-child(3) div {
    
    width: 90px;
  }

  .ant-table-tbody td:last-child {
    text-align: center;
  }

 
  @media (max-width: 1200px) {
    .ant-table {
      width: 1000px;
    }
  }

  @media (max-width: 992px) {
    .ant-table {
      width: 800px;
    }
    .ant-table-thead > tr > th {
      font-size: 14px;
    }
    .ant-table-tbody > tr > td {
      font-size: 13px;
    }
  }

  @media (max-width: 768px) {
    .ant-table {
      width: 600px;
      font-size: 12px;
    }
    .ant-table-tbody > tr > td {
      padding: 8px;
    }
  }

  @media (max-width: 480px) {
    .ant-table {
      width: 350px;
    }
    .ant-table-thead > tr > th {
      font-size: 12px;
    }
    .ant-table-tbody > tr > td {
      font-size: 11px;
    }
  }

  @media (max-width: 280px) {
    .ant-table {
      width: 200px;
      font-size: 10px;
    }

    .ant-table-tbody > tr > td {
      padding: 5px;
    }
    .ant-table-tbody td:last-child {
      font-size: 10px;
    }
  }
`;

export const StyledCell = styled.div`
  color: white;
  font-weight: bold;
  padding: 2px 14px;
  display: inline-block;

  @media (max-width: 480px) {
    font-size: 12px;
  }

  @media (max-width: 280px) {
    font-size: 10px;
  }
`;

export const StyledDeleteIcon = styled.div`
  cursor: pointer;
  font-size: 20px;
  color: #fff;
  height: 100%;

  @media (max-width: 280px) {
    font-size: 16px;
  }
`;

export const StyledBusca = styled.input`
    width: 100%;
    padding: 7px 30px;
    border-radius: 15px;
    border: none;
`;

export const StyledIcon = styled.i`
    position: absolute;
    color: black;
    left: 7px;
    top: 6px;
`;

export const StyledBuscaContainer = styled.div`
    margin-top: 3%;
    width: 40%;
    position: relative;
`

export const StyledSelect = styled(Select)`
    .ant-select {
        text-align: center;
        margin: 0 !important;
        padding: 0 !important;
        display: inline-block;
        width: 100%;
    }

    .ant-select-selector {
        margin: 0 !important; 
        padding: 0 16px; 
        border: 1px solid #fff; 
        background-color: transparent; 
        display: flex;
        justify-content: center;
    }
    
    .ant-select-selection-item {
        overflow: visible;
        text-overflow: unset;
        white-space: normal; 
    }

    .ant-select-arrow {
        display: none;
    }
`

export const StyledDivEdit = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7%;
`

export const StyledIconEdit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.95rem;
  border: none;
  margin: 0;
  padding: 0;
  background-color: rgba(0,0,0,0);
  color: white;
  cursor: pointer;

  &:hover{
    color: black !important;
  }
`

