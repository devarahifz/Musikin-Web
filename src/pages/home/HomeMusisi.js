import React from 'react'
import NavbarMusisi from '../../components/header/NavbarMusisi'
import Footer from '../../components/footer/FooterComponent'
import CardsMusisi from '../../components/cards/CardsMusisi'
const HomeMusisi = () => {
  return (
    <>
      <NavbarMusisi/>
      <div className='container py-5 my-3'>
        <h1 className='text-center fw-bold pb-3 '>Cari Live Performance-mu Disini!</h1>
        <div className='mx-auto justify-content-center w-50 pb-5'>
          <input className='w-100' type='form-control' placeholder='Ketikkan keyword lokasi, jumlah bayaran, atau deskripsi' />
        </div>
        <div className='container d-grid justify-content-center'>
          <div className='row justify-content-center gap-5'>
            <CardsMusisi/>
            <CardsMusisi/>
            <CardsMusisi/>
            <CardsMusisi/>
            <CardsMusisi/>
            <CardsMusisi/>
            <CardsMusisi/>
            <CardsMusisi/>
            <CardsMusisi/>
            <CardsMusisi/>
            <CardsMusisi/>
            <CardsMusisi/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default HomeMusisi