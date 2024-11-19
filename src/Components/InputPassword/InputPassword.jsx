import React, { useState } from "react";
import { InputContainer, StyledInputPassword, Icon } from "./Styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputPassword = React.forwardRef(({ placeholder, required, onChange, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <InputContainer>
            <StyledInputPassword
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                {...props}
                ref={ref}
            />
            <Icon onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Icon>
        </InputContainer>
    );
});

export default InputPassword;