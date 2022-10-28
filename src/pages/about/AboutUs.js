import React from 'react'
import NavbarAbout from '../../components/header/NavbarAbout'
import Footer from '../../components/footer/FooterComponent'
import signal from '../../assets/images/Signal.png'
import kami from '../../assets/images/Frame 50.png'

const AboutUs = () => {
    return (
        <>
        <NavbarAbout />
        <div style={{textAlign: 'center'}}>
            <img src={signal} alt="signal" />
            <p style={{fontSize: '2rem', width: '50%', margin: '0 auto'}}>Musikin adalah wadah bagi para musisi dan pemilik tempat rekreasi untuk saling berhubungan dan mendapatkan kerjasama dalam menghibur para pelanggan.</p>
            <h1 style={{fontWeight: 'bold', fontSize: '3rem', margin: '7rem 0 3rem'}}>Tim Kami</h1>
            <img src={kami} alt="Kami" style={{width: 'auto', margin: '0 0 7rem'}} />
        </div>
        <Footer />
        </>
    )
}

export default AboutUs