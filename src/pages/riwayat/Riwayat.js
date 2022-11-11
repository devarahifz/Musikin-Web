import React from 'react'
import NavbarMusisi from '../../components/header/NavbarMusisi'
import Footer from '../../components/footer/FooterComponent'
import CardsRiwayatMusisi from '../../components/cards/CardsRiwayatMusisi'
const Riwayat = () => {
  return (
    <>
    <NavbarMusisi/>
    <div className='container py-5 my-3'>
      <h1 className='text-center fw-bold pb-3 '>Riwayat Lamaranmu</h1>
      <div className='container justify-content-center'>
        <div className='row justify-content-center gap-5'>
          <CardsRiwayatMusisi/>
          <CardsRiwayatMusisi/>
          <CardsRiwayatMusisi/>
          <CardsRiwayatMusisi/>
          <CardsRiwayatMusisi/>
          <CardsRiwayatMusisi/>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  )
}

export default Riwayat