import React from 'react'
import { ButtonFormStyle } from './Styles'

function ButtonForm(props) {
  return (
    <>
        <ButtonFormStyle type={props.type}>{props.text}</ButtonFormStyle>
    </>
  )
}

export default ButtonForm;
