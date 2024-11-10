import React, { useState } from 'react'
import { InputContainer, StyledInputPassword, Icon } from './Styles'
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function InputPassword(props) {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <InputContainer>
            <StyledInputPassword type={showPassword ? "text" : "password"} placeholder={props.placeholder}  required={props.required} onChange={props.onChange}/>
            <Icon onClick={toggleShowPassword}>{showPassword ? <FaEyeSlash /> : <FaEye />}</Icon>
        </InputContainer>
    )
}
