import React, { useEffect } from 'react'
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, CloseButton, LoginButton} from "./styles";
import ImputForm from '../Input/ImputForm';
import { useForm } from 'react-hook-form';
import InputPassword from '../InputPassword';
import { useUpdateUser } from '../../hooks/user';
import useAuthStore from '../../stores/auth';


export default function ModalCpeEdit({isOpen, setModalOpen}) {
    
    const {
        handleSubmit,
        register,
        reset,
        formState: {errors},
        watch,
    } = useForm({});

    const senha = watch('senha');

    const{ mutate:putUser, isPending } = useUpdateUser({ onSuccess: (updatedUser) => {
        useAuthStore.setState((state) => ({
            usuario: { ...state.usuario, ...updatedUser }
        }));
        reset();
    },
    onError: (error) => {
        console.error("Erro ao atualizar o usuário:", error);
    }});

    const usuario = useAuthStore((state) => state.usuario._id);

    function response(data) {
        const filteredData = Object.fromEntries(
            Object.entries(data).filter(([key, value]) => value.trim() !== "")
        );
        putUser({id: usuario, body: filteredData});
        setModalOpen();
    }


    if(isOpen)
    return (
        <>
            <ModalOverlay>
            <ModalContent onSubmit={handleSubmit(response)}>
                <ModalHeader>
                <h2>Editar Usuário</h2>
                </ModalHeader>
                <CloseButton onClick={setModalOpen}>&times;</CloseButton>
                <ModalBody>
                    <ImputForm  {...register("nome")} type="text" placeholder="Nome" />
                    <ImputForm {...register("email")} type="email" placeholder="E-mail" />
                    <ImputForm  {...register("cargo")} type="text" placeholder="Cargo" />
                    <ImputForm  {...register("status")} type="text" placeholder="Status" />
                    <InputPassword  {...register("senha")} placeholder="Senha"/>
                    <ImputForm  type="password" 
                                placeholder="Confirme sua senha"
                                {...register("confirmeSenha", {
                                    validate: (value) => {
                                        if (!senha || senha.trim() === "") return true;
                                        return value === senha || "As senhas não correspondem"
                                    }
                                })}
                            />
                            {errors.confirmeSenha && <p style={{color:'red'}}>{errors.confirmeSenha.message}</p>}
                </ModalBody>
                <ModalFooter>
                    <LoginButton type="submit">SALVAR</LoginButton>
                </ModalFooter>
            </ModalContent>
            </ModalOverlay>
        </> 
  )
}

