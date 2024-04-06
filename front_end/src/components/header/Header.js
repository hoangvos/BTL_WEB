import React from 'react';
import Logo from '../Logo';
import Nav from './Nav';
import RightSideHeader from './RightSideHeader';
import style from './Header.module.css';

export default function Header() {
  return (
    <div
      className={`d-flex justify-content-between align-items-center m-auto ${style.header}`}
      >
      <Logo />
      <Nav />
      <RightSideHeader />
    </div>
  )
}
