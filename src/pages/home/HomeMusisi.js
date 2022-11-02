import React from 'react'
import { FaSearch } from "react-icons/fa"
import NavbarMusisi from '../../components/header/NavbarMusisi'
import Footer from '../../components/footer/FooterComponent'
import CardsMusisi from '../../components/cards/CardsMusisi'
const HomeMusisi = () => {
  return (
    <>
      <NavbarMusisi/>
      <div className='container py-5 my-3'>
        <h1 className='text-center fw-bold pb-3 '>Cari Live Performance-mu Disini!</h1>
        <div className='mx-auto justify-content-center w-50 pb-5 d-flex'>
          <input className='w-100' type='form-control rounded-0' placeholder='Ketikkan keyword lokasi, jumlah bayaran, atau deskripsi' /><button className='btn btn-primary rounded-0'><FaSearch/></button>
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