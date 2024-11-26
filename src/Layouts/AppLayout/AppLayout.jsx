import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header'
import { Conteiner } from './Styles'

export default function AppLayout() {
  return (
    <Conteiner>
        <Header/>
        <Outlet/>
    </Conteiner>
  )
}
