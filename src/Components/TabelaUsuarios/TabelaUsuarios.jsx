import React, { useState, useEffect } from 'react';
import api from '../../Services/api';
import { StyledCell, StyledDeleteIcon, StyledTabela, StyledBusca, StyledIcon, StyledBuscaContainer } from './styles';
import { useDeleteUser } from '../../hooks/user';
import { FaSearch } from "react-icons/fa";


const TabelaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([])
  const [carregando, setCarregando] = useState(false);

  const{ mutate:deleteUsuario, isPending } = useDeleteUser({});
  
  function destroyUsuario(id) {
    console.log("id: ", id);
    deleteUsuario(id);
    window.location.reload();
  }

  const getUsuarios = async () => {
    try {
      setCarregando(true);
      const res = await api.get("/usuarios");
      setUsuarios(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.message);
    } finally {
      setCarregando(false);
    }
  };


  useEffect(() => {
    getUsuarios();
  }, []);
  
  
  const columns = [
    {
      title: 'MEMBRO',
      dataIndex: 'member',
      key: 'member',
      render: (text, record) => (
        <div>
          <div style={{ fontWeight: 'bold' }}>{record.member}</div>
        </div>
      ),
    },
    {
      title: 'CARGO',
      dataIndex: 'cargo',
      key: 'cargo',
      render: (text) => <StyledCell>{text}</StyledCell>,
    },
    {
      title: 'USUÁRIO',
      dataIndex: 'usuario',
      key: 'usuario',
      render: (text) => <StyledCell>{text}</StyledCell>,
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <StyledCell>
          <StyledDeleteIcon onClick={() => destroyUsuario(record.key)}>🗑️</StyledDeleteIcon>
        </StyledCell>
      )
    },
  ];


  const data = usuarios.map(usuario => ({
    key: usuario._id,
    member: usuario.nome,  
    cargo: usuario.cargo,   
    usuario: usuario.status,                     
  }));

    return <>
        <StyledBuscaContainer><StyledBusca placeholder="Nome do Usuário"></StyledBusca><StyledIcon><FaSearch /></StyledIcon></StyledBuscaContainer>
        <StyledTabela 
                columns={columns} 
                pagination={false}
                loading={carregando} 
                dataSource={data}
        />;
    </>
    
  };
  
  export default TabelaUsuarios;
