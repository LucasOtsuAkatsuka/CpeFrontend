import React, { useEffect, useState } from 'react'
import { StyledDados, StyledDado, StyledValor} from "./styles"
import useAuthStore from '../../stores/auth';



export default function Usuario() {
   

    const usuarioAtual = useAuthStore((state) => state.usuario);
    const [user, setUser] = useState(usuarioAtual);

    useEffect(() => {
        setUser(usuarioAtual)
      }, [usuarioAtual]);

    if (!usuarioAtual) {
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
