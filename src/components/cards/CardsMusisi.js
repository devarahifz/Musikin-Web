import React from 'react'
import { NavItem } from 'react-bootstrap'
import { FaMapMarkerAlt,FaDollarSign } from "react-icons/fa"
const CardsMusisi = (props) => {
  const { title, location, fee, description, id } = props

  return (
    <div className="card" style={{width: '21rem' ,height: '10.75rem' , borderRadius: '12px', border: '2px solid #ECECEC'}}>
    <a href={`/detail/${id}`} style={{color: 'black', textDecoration: 'none'}}>
    <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-subtitle mb-2" style={{fontSize: "10px"}}><FaMapMarkerAlt/>{location}</p>
        <p className="card-subtitle mb-2" style={{fontSize: "10px"}}><FaDollarSign/>Rp {fee}</p>
        <p className="card-text" style={{fontSize: '10px'}}>
          {description.length > 150
          ? description.substring(0,120) + "..."
          : description
          }</p>
    </div>
    </a>
    </div>
  )
}

export default CardsMusisi