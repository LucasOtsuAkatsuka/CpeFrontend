import React, { useState, useEffect } from 'react';
import api from '../../Services/api';
import {
    StyledSelect,
    StyledCell,
    StyledDeleteIcon,
    StyledTabela,
    StyledBusca,
    StyledIcon,
    StyledBuscaContainer,
    StyledDivEdit,
    StyledIconEdit,
} from './styles';
import { useUpdateUser } from '../../hooks/user';
import { FaSearch, FaEdit } from 'react-icons/fa';
import useAuthStore from '../../stores/auth';
import ModalDeleteUsuario from '../ModalDeleteUsuario/ModalDeleteUsuario';
import ModalEditAdm from '../ModalEditAdm';

const TabelaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
    const [busca, setBusca] = useState('');
    const [cargoEditando, setCargoEditando] = useState(null); // Novo estado para edição de cargos
    const [novoCargo, setNovoCargo] = useState('');
    const [openModalEdit, setOpenModalEdit] = useState(false); // Estado para armazenar o valor do cargo editado

    const { mutate: putUser } = useUpdateUser({});
    const usuario = useAuthStore((state) => state.usuario._id);

    const handleStatusChange = (id, novoStatus) => {
        const statusUpdate = { nivel: novoStatus };
        putUser({ id: id, body: statusUpdate });
        const novosUsuarios = usuarios.map((usuario) =>
            usuario._id === id ? { ...usuario, nivel: novoStatus } : usuario
        );
        setUsuarios(novosUsuarios);
    };

    const getUsuarios = async () => {
        try {
            setCarregando(true);
            const res = await api.get('/usuarios');
            setUsuarios(res.data);
        } catch (erro) {
            console.error(erro);
            alert(erro.message);
        } finally {
            setCarregando(false);
        }
    };

    const handleEditCargo = (id, cargo) => {
        setCargoEditando(id);
        setNovoCargo(cargo);
    };

    const salvarCargo = async (id) => {
        try {
            await putUser({ id, body: { cargo: novoCargo } });
            const novosUsuarios = usuarios.map((usuario) =>
                usuario._id === id ? { ...usuario, cargo: novoCargo } : usuario
            );
            setUsuarios(novosUsuarios);
            setCargoEditando(null);
        } catch (error) {
            console.error('Erro ao salvar cargo:', error);
        }
    };


    useEffect(() => {
        getUsuarios();
    }, []);

    const usuariosFiltrados = usuarios.filter((usuario) =>
        usuario.nome.toLowerCase().includes(busca.toLowerCase())
    );

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
            render: (text, record) => (
                <StyledCell>
                    <StyledDivEdit>
                        {text}
                        <StyledIconEdit onClick={() => {setOpenModalEdit(true), setUsuarioSelecionado(record.key)}}><FaEdit/></StyledIconEdit>
                    </StyledDivEdit>
                </StyledCell>
            ),
        },
        {
            title: 'USUÁRIO',
            dataIndex: 'usuario',
            key: 'usuario',
            render: (text, record) => (
                <StyledCell>
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
                </StyledCell>
            ),
        },
        {
            title: '',
            key: 'action',
            render: (_, record) => (
                <StyledCell>
                    <StyledDeleteIcon
                        onClick={() => {
                            setOpenModal(true);
                            setUsuarioSelecionado(record.key);
                        }}
                    >
                        🗑️
                    </StyledDeleteIcon>
                </StyledCell>
            ),
        },
    ];

    const data = usuariosFiltrados.map((usuario) => ({
        key: usuario._id,
        member: usuario.nome,
        cargo: usuario.cargo,
        usuario: usuario.nivel,
    }));

    return (
        <>
            <StyledBuscaContainer>
                <StyledBusca
                    placeholder="Nome do Usuário"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                />
                <StyledIcon>
                    <FaSearch />
                </StyledIcon>
            </StyledBuscaContainer>
            <StyledTabela
                columns={columns}
                pagination={false}
                loading={carregando}
                dataSource={data}
            />
            <ModalDeleteUsuario
                idUsuario={usuarioSelecionado}
                isOpen={openModal}
                setModalOpen={() => setOpenModal(!openModal)}
            />
            <ModalEditAdm 
                isOpen={openModalEdit} 
                setModalOpen ={() => setOpenModalEdit(!openModalEdit)}
                idUsuario={usuarioSelecionado}
            />
        </>
    );
};

export default TabelaUsuarios;