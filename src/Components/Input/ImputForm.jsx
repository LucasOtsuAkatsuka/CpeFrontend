import React from 'react';
import { InputForm } from './Styles';

const ImputForm = React.forwardRef(({ type, placeholder, required, onChange, ...props }, ref) => {
  return (
    <>
        <InputForm type={type} placeholder={placeholder} required={required} onChange={onChange} {...props} ref={ref}/>
    </>
  )
});

export default ImputForm;
