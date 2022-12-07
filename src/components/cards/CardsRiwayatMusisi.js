import React from 'react'
import { FaMapMarkerAlt,FaDollarSign,FaArrowRight } from "react-icons/fa"
import './responsivetext.css'
const CardsRiwayatMusisi = (props) => {
    
    const { title, location, fee, createdAt, status, id } = props
    const style = {
        applied : {
            background: '#FFF9F2',
            color: '#BF6919',
            border: '1px solid #BF6919'
        },
        accepted : {
            background: '#E6F7F2',
            color: '#1F9D55',
            border: '1px solid #1F9D55'
        },
        rejected : {
            background: '#FDEDEC',
            color: '#E02E2E',
            border: '1px solid #E02E2E'
        }
    }
  return (
    <div className="card" style={{minheight: '112px' , borderRadius: '12px', border: '2px solid #ECECEC'}}>
    <div className="card-body ">
        <div className='row align-middle justify-content'>
            <div className='col-12 col-sm ms-0 ms-sm-3 text-center text-sm-start'>
                <h5 className="card-title fw-bold mt-3 ">{title}</h5>
                <p className="card-subtitle mb-2" style={{fontSize: '10px'}}><FaMapMarkerAlt/>{location}</p>
            </div>
            <div className='col-6 col-sm text-center'>
                <p className="card-subtitle mt-4 texts p-0"><FaDollarSign/> Rp {fee !== null ? fee : '-'},00</p>
            </div>
            <div className='col-6 col-sm text-center'>
                <p className=' mt-4 texts'>{createdAt}</p>
            </div>
            <div className='col-6 col-sm text-center'>
                <div 
                    className='badge mt-4' 
                    style={status === 'applied' ? style.applied : status === 'accepted' ? style.accepted : status === 'rejected' && style.rejected}
                >
                    {status === 'applied' ? 'Dalam Ulasan' : status === 'accepted' ? 'Diterima' : status === 'rejected' && 'Ditolak'}
                </div>
            </div>
            <a href={`/detail/${id}`} className='col-6 col-sm text-center'>
                <button className='btn btn-primary mt-3'>DETAIL <FaArrowRight/></button>
            </a>
        </div>
    </div>
    </div>
  )
}

export default CardsRiwayatMusisi