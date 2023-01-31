import React from 'react'
import { DefaultButton } from './style'
const Button = (props) => {
  return (
    <>
    <DefaultButton>
        {props.text}
    </DefaultButton>
    </>
  )
}

export default Button