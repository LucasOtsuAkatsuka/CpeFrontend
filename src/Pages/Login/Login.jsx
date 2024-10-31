import React from 'react'
import BotaoPadrao from '../../Components/BotaoPadrao'
import { useNavigate } from 'react-router-dom'


export default function Login() {

  const navigate = useNavigate();

  return (
    <div>
      <BotaoPadrao onClick={()=>navigate("/")}></BotaoPadrao>
    </div>
  )
}
