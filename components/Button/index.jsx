import React from 'react'
import { DefaultButton } from './style'
const Button = (props) => {
  return (
    <>
    <a href={props.href} className="w-full mb-4">
    <DefaultButton>
        {props.text}
    </DefaultButton>
    </a>
    </>
  )
}

export default Button