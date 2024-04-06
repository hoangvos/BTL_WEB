import React from 'react'
import bitis_logo from '../assets/bitis_logo.svg'

const LogoStyle = {
  height: '60px',
}
export default function Logo() {
  return (
    <img src={bitis_logo} alt="Logo"
      style={LogoStyle} />
  )
}
