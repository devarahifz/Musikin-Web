import React from 'react'
import NavbarAbout from '../../components/header/NavbarAbout'
import Footer from '../../components/footer/FooterComponent'
import signal from '../../assets/images/Signal.png'
import kami from '../../assets/images/Frame 50.png'
import './responsive.css'

const AboutUs = () => {
    return (
        <>
        <NavbarAbout />
        <div style={{textAlign: 'center'}}>
            <img className='img-fluid' src={signal} alt="signal" />
            <p className="texts"style={{fontSize: '2rem', margin: '0',minWidth:"280px"}}>Musikin adalah wadah bagi para musisi dan pemilik tempat rekreasi untuk saling berhubungan dan mendapatkan kerjasama dalam menghibur para pelanggan.</p>
            <h1 className="title"style={{fontWeight: 'bold', fontSize: '3rem', margin: '7rem 0 3rem'}}>Tim Kami</h1>
            <img className='img-fluid' src={kami} alt="Kami" style={{width: 'auto', margin: '0 0 7rem'}} />
        </div>
        <Footer />
        </>
    )
}

export default AboutUs