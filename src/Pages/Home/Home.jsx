import React, { useEffect, useState } from 'react'
import Carrossel from '../../Components/Carrossel'
import { ButtonModalLogin, Container, Pagina } from './Styles'
import api from '../../Services/api';
import Tabela from '../../Components/Tabela';
import ModalCpe from '../../Components/Modal/ModalCpe';
import useAuthStore from '../../stores/auth';
import { useDeleteSessao } from '../../hooks/sessoes';

export default function Home() {

  const [usuarios, setUsuarios] = useState([])
  const [hasActiveSession, setHasActiveSession] = useState();
  const [carregando, setCarregando] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const usuario = useAuthStore((state) => state.usuario._id);
  const{ mutate:deleteSessao, isPending } = useDeleteSessao({});

  const checkSessaoAtiva = async () => {
    try {
      const res = await api.get("/sessoes");
      const sessaoAtiva = res.data.find(sessao => sessao.id_usuario._id === usuario);
      if(sessaoAtiva) {
        setHasActiveSession(true);
      }else{
        setHasActiveSession(false);
      }''

    } catch (error) {
      console.error('Erro ao verificar sessões:', error);
      setHasActiveSession(false);
    }
  }

  function destroySessao() {
    console.log("id: ", usuario);
    deleteSessao(usuario);
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
  }
  useEffect(() => {
    getUsuarios();
    checkSessaoAtiva();
  }, []);

  if (carregando) return (<Container>
    <h1>Carregando...</h1>
  </Container>)

  return (
    <Pagina>
      <Container>
        <Carrossel/>
        {hasActiveSession ? (
          <ButtonModalLogin onClick={() => destroySessao()}>Deslogar</ButtonModalLogin>
        ) : (
          <ButtonModalLogin onClick={() => setOpenModal(true)}>Fazer Login</ButtonModalLogin>
        )}
        <Tabela/>
        <ModalCpe isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
      </Container>
    </Pagina>
  )
}
//{usuarios.map((usuario)=> <h1 className='nomesMap'>{usuario.nome}</h1>)}