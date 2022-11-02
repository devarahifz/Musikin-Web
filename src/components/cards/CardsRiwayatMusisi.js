import React from 'react'
import { FaMapMarkerAlt,FaDollarSign,FaArrowRight } from "react-icons/fa"
const CardsRiwayatMusisi = () => {
  return (
    <div className="card" style={{minheight: '112px' , borderRadius: '12px', border: '2px solid #ECECEC'}}>
    <div className="card-body ">
        <div className='row align-middle justify-content'>
            <div className='col ps-5 ms-3'>
                <h5 className="card-title fw-bold mt-3 ">Starbucks</h5>
                <p className="card-subtitle mb-2" style={{fontSize: '10px'}}><FaMapMarkerAlt/>Mall Kelapa Gading,Jakarta Timur</p>
            </div>
            <div className='col text-center'>
                <p className="card-subtitle mt-4"><FaDollarSign/>Rp 500.000,00</p>
            </div>
            <div className='col text-center'>
                <p className=' mt-4'>Sabtu, 23 Februari 2022</p>
            </div>
            <div className='col text-center'>
                <button className='btn btn-danger mt-3'>Dalam Ulasan</button>
            </div>
            <div className='col text-center'>
                <button className='btn btn-primary mt-3'>DETAIL <FaArrowRight/></button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CardsRiwayatMusisi