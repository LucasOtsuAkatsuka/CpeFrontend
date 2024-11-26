import React from 'react'
import { Container,  StyledDados, StyledDado, StyledValor} from "./styles"


export default function Usuario({usuario}) {
  return (
        <StyledDados>
            <StyledDado>
                Nome: <StyledValor>{usuario.nome}</StyledValor>
            </StyledDado>
            <StyledDado>
                Email: <StyledValor>{usuario.email}</StyledValor>
            </StyledDado>
            <StyledDado>
                Cargo: <StyledValor>{usuario.cargo}</StyledValor>
            </StyledDado>
            <StyledDado>
                Status: <StyledValor>{usuario.status}</StyledValor>
            </StyledDado>
        </StyledDados>
  )
}
