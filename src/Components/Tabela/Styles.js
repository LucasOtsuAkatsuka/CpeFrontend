import styled from 'styled-components';
import { Table } from 'antd';

export const StyledTabela = styled(Table)`
  .ant-table {
    background-color: #212121;
    width: 1200px;
    max-width: 1200px;
    margin: 60px auto;
  }

  .ant-table-thead > tr > th {
    background-color: #fddd00;
    color: #000;
    font-weight: bold;
    text-align: center;
    border-right: none;
  }

  .ant-table-tbody > tr > td {
    background-color: #333333;
    color: #fff;
    border: none;
    border-bottom: 1px solid #fff;
    word-wrap: break-word;
  }

  .ant-table-tbody > tr:hover > td {
    background-color: #444444;
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
  background-color: #333333;
  color: #fddd00;
  padding: 2px 14px;
  border: 1px solid #fddd00;
  border-radius: 5px;
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

  &:hover {
    color: #fddd00;
  }

  @media (max-width: 280px) {
    font-size: 16px;
  }
`;