import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import MainHomePage from './mainHomePage/MainHomePage';

export default function Home() {
  return (
    <>
      <Header/>
      <MainHomePage/>
      <Footer /> 
    </>
  )
}
