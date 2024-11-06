import React from 'react';
import { InputForm } from './Styles';

export default function ImputForm(props) {
  return (
    <>
        <InputForm type={props.type} placeholder={props.placeholder} />
    </>
  )
}
