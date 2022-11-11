import React from 'react'
import { FaMapMarkerAlt,FaDollarSign } from "react-icons/fa"
const CardsMusisi = () => {
  return (
    <div className="card" style={{width: '21rem' ,height: '10.75rem' , borderRadius: '12px', border: '2px solid #ECECEC'}}>
    <a href='/detail' style={{color: 'black', textDecoration: 'none'}}>
    <div className="card-body">
        <h5 className="card-title fw-bold">Starbucks</h5>
        <p className="card-subtitle mb-2"><FaMapMarkerAlt/>Mall Kelapa Gading,Jakarta Timur</p>
        <p className="card-subtitle mb-2"><FaDollarSign/>Rp 500.000,00</p>
        <p className="card-text" style={{fontSize: '10px'}}>Main jam 14.00 - 15.00 WIB. Maksimal personil 7 orang. Lokasi di bagian kiri lantai 2 sebelah bread.co. Mendapatkan konsumsi (bisa request). Genre yang di....</p>
    </div>
    </a>
    </div>
  )
}

export default CardsMusisi