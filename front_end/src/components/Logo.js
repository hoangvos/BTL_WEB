import React from 'react'
import bitis_logo from '../assets/bitis_logo.svg'

export default function Logo({ childClass }) {
  return (
    <img src={bitis_logo} alt="Logo" className={`${childClass}`} />
  )
}
