import React, { useEffect, useState } from 'react'
import { Container, Pagina, StyledTitulo} from './Styles'
import api from '../../Services/api';
import TabelaUsuarios from '../../Components/TabelaUsuarios';
import ModalCpe from '../../Components/Modal/ModalCpe';
import useAuthStore from '../../stores/auth';

export default function Usuarios() {

  const [usuarios, setUsuarios] = useState([])
  const [carregando, setCarregando] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const usuario = useAuthStore((state) => state.usuario._id);

  
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
      <Container>
        <StyledTitulo>GERENCIAR USUÁRIOS</StyledTitulo>
        <TabelaUsuarios/>
      </Container>
    </Pagina>
  )
}
