import React from 'react'
import { StyledDados, StyledDado, StyledValor} from "./styles"


export default function Usuario({user}) {
    if (!user) {
        return <div>Carregando...</div>; 
      }

    return (
            <StyledDados>
                <StyledDado>
                    Nome: <StyledValor>{user.nome}</StyledValor>
                </StyledDado>
                <StyledDado>
                    Email: <StyledValor>{user.email}</StyledValor>
                </StyledDado>
                <StyledDado>
                    Cargo: <StyledValor>{user.cargo}</StyledValor>
                </StyledDado>
                <StyledDado>
                    Status: <StyledValor>{user.status}</StyledValor>
                </StyledDado>
            </StyledDados>
    )
}
