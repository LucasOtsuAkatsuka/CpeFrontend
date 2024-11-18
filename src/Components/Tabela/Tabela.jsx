import React from 'react';
import { Space} from 'antd';
import { StyledCell, StyledDeleteIcon, StyledTabela } from './Styles';


const columns = [
  {
    title: 'MEMBRO',
    dataIndex: 'member',
    key: 'member',
    render: (text, record) => (
      <div>
        <div style={{ fontWeight: 'bold' }}>{record.member}</div>
        <div style={{ color: '#FDDD00' }}>{record.role}</div>
      </div>
    ),
  },
  {
    title: 'CHEGADA',
    dataIndex: 'arrival',
    key: 'arrival',
    render: (text) => <StyledCell>{text}</StyledCell>,
  },
  {
    title: 'TEMPO',
    dataIndex: 'time',
    key: 'time',
    render: (text) => <StyledCell>{text}</StyledCell>,
  },
  {
    title: '',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <StyledDeleteIcon>🗑️</StyledDeleteIcon>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    member: 'Mariana Rabelo',
    role: 'Gerente de Recrutamento e Seleção',
    arrival: '22:34',
    time: '01:34',
  },
  {
    key: '2',
    member: 'Oswaldo Neto',
    role: 'Dev Líder',
    arrival: '22:34',
    time: '01:34',
  },
  {
    key: '3',
    member: 'João Pirajá',
    role: 'Dev Líder',
    arrival: '22:34',
    time: '01:34',
  },
];

const Tabela = () => {
    return <StyledTabela columns={columns} dataSource={data} pagination={false} />;
  };
  
  export default Tabela;