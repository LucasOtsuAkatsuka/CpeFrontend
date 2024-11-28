import React, { useState, useEffect } from 'react';
import api from '../../Services/api';
import { StyledSelect, StyledCell, StyledDeleteIcon, StyledTabela, StyledBusca, StyledIcon, StyledBuscaContainer } from './styles';
import { useDeleteUser, useUpdateUser } from '../../hooks/user';
import { FaSearch } from "react-icons/fa";
import useAuthStore from '../../stores/auth';



const TabelaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([])
    const [carregando, setCarregando] = useState(false);
    const [selectEstado, setSelectEstado] = useState("");

    const{ mutate:deleteUsuario} = useDeleteUser({});
    const{ mutate:putUser } = useUpdateUser({});
    

    const usuario = useAuthStore((state) => state.usuario._id);


    const handleStatusChange = (id, novoStatus) => {
        const statusUpdate = { nivel: novoStatus };
        putUser({id: id, body: statusUpdate});
        const novosUsuarios = usuarios.map((usuario) =>
        usuario._id === id ? { ...usuario, nivel: novoStatus } : usuario
        );
        setUsuarios(novosUsuarios); 
    };
  
    function destroyUsuario(id) {
        deleteUsuario(id);
        const novosUsuarios = usuarios.filter((usuario) => usuario._id !== id);
        setUsuarios(novosUsuarios);
        //window.location.reload();
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
        render: (text, record) => 
                    (<StyledCell>
                        <StyledSelect
                            value={record.usuario}
                            onChange={(value) => handleStatusChange(record.key, value)}
                            style={{
                                width: '100%', 
                                maxWidth: '200px', 
                                textAlign: 'center', 
                                }}
                                dropdownStyle={{
                                textAlign: 'center', 
                                }}
                        >
                            <StyledSelect.Option value="comum">Comum</StyledSelect.Option>
                            <StyledSelect.Option value="administrador">Administrador</StyledSelect.Option>
                        </StyledSelect>
                    </StyledCell>),
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
        usuario: usuario.nivel,                     
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
