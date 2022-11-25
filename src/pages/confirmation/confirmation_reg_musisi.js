import React from 'react'
import NavbarAbout from '../../components/header/NavbarAbout'
import welcome from '../../assets/images/welcome.png'
const ConfirmationMusisiReg = () => {
  return (
    <>
        <NavbarAbout/>
        <div className='container mx-auto mt-5 text-center'>
            <div className='container'>
                <img src={welcome} alt="welcome"/>
                <h1 className='fw-bold'> Selamat Datang di Musikin!</h1>
                <p> Cari Live Performance Impian kamu disini dan jadilah bintangnya</p>
            </div>
        </div>
    </>
  )
}

export default ConfirmationMusisiReg