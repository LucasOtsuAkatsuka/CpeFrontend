import React, { useEffect, useState } from 'react'
import Carrossel from '../../Components/Carrossel'
import { ButtonModalLogin, Container, Pagina } from './Styles'
import Header from '../../Components/Header';
import api from '../../Services/api';
import Tabela from '../../Components/Tabela';
import ModalCpe from '../../Components/Modal/ModalCpe';

export default function Home() {

  const [usuarios, setUsuarios] = useState([])
  const [carregando, setCarregando] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  
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
  }, []);

  if (carregando) return (<Container>
    <h1>Carregando...</h1>
  </Container>)

  return (
    <Pagina>
      <Header/>
      <Container>
        <Carrossel/>
        <ButtonModalLogin onClick={() => setOpenModal(true)}>Fazer Login</ButtonModalLogin>
        <Tabela/>
        <ModalCpe isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>
      </Container>
    </Pagina>
  )
}//{usuarios.map((usuario)=> <h1 key={key} className='nomesMap'>{usuario.nome}</h1>)}
