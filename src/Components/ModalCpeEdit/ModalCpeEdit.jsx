import React from 'react'
import { ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, CloseButton, LoginButton} from "./styles";
import ImputForm from '../Input/ImputForm';
import { useForm } from 'react-hook-form';
import InputPassword from '../InputPassword';


export default function ModalCpeEdit({isOpen, setModalOpen}) {
    const {
        handleSubmit,
        register,
        formState: {errors},
      } = useForm({});


    if(isOpen)
    return (
        <>
            <ModalOverlay>
            <ModalContent>
                <ModalHeader>
                <h2>Editar Usuário</h2>
                </ModalHeader>
                <CloseButton onClick={setModalOpen}>&times;</CloseButton>
                <ModalBody>
                    <ImputForm  {...register("nome")} type="text" placeholder="Nome" />
                    <ImputForm {...register("email")} type="email" placeholder="E-mail" />
                    <ImputForm  {...register("cargo")} type="text" placeholder="Cargo" />
                    <ImputForm  {...register("status")} type="text" placeholder="Status" />
                    <InputPassword  {...register("senha")} type="password" placeholder="Senha"/>
                    <ImputForm type="password" placeholder="Confirme sua senha"/>
                </ModalBody>
                <ModalFooter>
                    <LoginButton>SALVAR</LoginButton>
                </ModalFooter>
            </ModalContent>
            </ModalOverlay>
        </> 
  )
}

