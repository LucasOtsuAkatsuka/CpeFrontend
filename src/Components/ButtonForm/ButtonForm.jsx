import React from 'react'
import { ButtonFormStyle } from './Styles'

function ButtonForm(props) {
  return (
    <>
        <ButtonFormStyle>{props.text}</ButtonFormStyle>
    </>
  )
}

export default ButtonForm;
