import React from 'react'
import { StyledBotaoPadrao } from './Styles'

export default function BotaoPadrao(props) {
  return (
    <div>
        <StyledBotaoPadrao onClick={props.onClick}>
            Redirecionar
        </StyledBotaoPadrao>
    </div>
  )
}
