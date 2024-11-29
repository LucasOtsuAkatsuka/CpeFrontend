import React, { useState, useEffect } from 'react';
import { Space} from 'antd';
import api from '../../Services/api';
import { StyledCell, StyledDeleteIcon, StyledTabela } from './Styles';
import { useDeleteSessao } from '../../hooks/sessoes';


const Tabela = () => {
  const [sessoes, setSessoes] = useState([])
  const [carregando, setCarregando] = useState(false);

  const{ mutate:deleteSessao, isPending } = useDeleteSessao({});
  
  function destroySessao(id) {
    console.log("id: ", id);
    deleteSessao(id);
    window.location.reload();
  }

  const formatarHora = (data) => {
    const date = new Date(data);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const calcularDuracao = (createdAt) => {
    const start = new Date(createdAt);
    const end = new Date();
  
    const duracao = end - start;
    const horas = Math.floor(duracao / (1000 * 60 * 60)); 
    const minutos = Math.floor((duracao % (1000 * 60 * 60)) / (1000 * 60)); 
  
    const hoursFormatted = String(horas).padStart(2, '0');
    const minutesFormatted = String(minutos).padStart(2, '0');


    return `${hoursFormatted}:${minutesFormatted}`; 
  };
  
  const getSessoes = async () => {
    try {
      setCarregando(true);
      const res = await api.get("/sessoes");
      setSessoes(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.message);
    } finally {
      setCarregando(false);
    }
  };


  useEffect(() => {
    getSessoes();
    const intervalId = setInterval(() => {
      setSessoes((prevSessoes) =>
        prevSessoes.map((sessao) => ({
          ...sessao,
          duration: calcularDuracao(sessao.createdAt),
        }))
      );
    }, 1000); 

    return () => clearInterval(intervalId);
    
  }, []);
  
  
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
        <StyledCell>
          <StyledDeleteIcon onClick={() => destroySessao(record.idusuario)}>🗑️</StyledDeleteIcon>
        </StyledCell>
      )
    },
  ];

  const data = sessoes.map(sessao => ({
    key: sessao._id,
    idusuario: sessao.id_usuario._id,
    member: sessao.id_usuario.nome,  
    role: sessao.id_usuario.cargo,   
    arrival: formatarHora(sessao.createdAt),       
    time: calcularDuracao(sessao.createdAt),              
  }));

    return <StyledTabela 
                columns={columns} 
                pagination={false}
                loading={carregando} 
                dataSource={data}
            />;
  };
  
  export default Tabela;