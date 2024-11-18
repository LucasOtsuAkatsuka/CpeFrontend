import React, { useEffect, useState } from 'react'
import Carrossel from '../../Components/Carrossel'
import { Container, Pagina } from './Styles'
import Header from '../../Components/Header';
import api from '../../Services/api';
import Tabela from '../../Components/Tabela';

export default function Home() {

  const [usuarios, setUsuarios] = useState([])
  const [carregando, setCarregando] = useState(false);
  
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
        <Tabela/>
        {usuarios.map((usuario)=> <h1 className='nomesMap'>{usuario.nome}</h1>)}
      </Container>
    </Pagina>
  )
}
