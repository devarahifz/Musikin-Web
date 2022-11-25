import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import NavbarLanding from '../../components/header/NavbarLanding'
import Footer from '../../components/footer/FooterComponent'
import signal from '../../assets/images/Signal.png'
import gambar1 from '../../assets/images/Playing jazz-pana.png'
import gambar2 from '../../assets/images/Hiring-pana.png'
import testimoni from '../../assets/images/Testimoni.png'

const LandingPage = () => {
  return (
    <>
    <NavbarLanding />
      <div style={{textAlign: 'center'}}>
        <img src={signal} alt="signal" />
        <Row className='align-items-center'>
          <Col className='text-end'>
            <img src={gambar1} className='w-auto col' />
          </Col>
          <Col className='text-start'>
            <h1 style={{fontWeight: 'bold', fontSize: '3rem'}}>Mau Ngisi Live Music?</h1>
            <p style={{fontSize: '1.5rem', width:'60%'}}>Ayo daftarin dirimu biar bisa jadi penampil ditempat yang kamu pengen!</p>
            <a href="/registration"><Button className='py-2 px-4 mt-5' style={{background: '#4361EE', fontWeight: '500'}}>DAFTAR SEBAGAI MUSISI</Button></a>
          </Col>
        </Row>
        <Row className='align-items-center mt-5'>
          <Col className='text-end'>
            <h1 style={{fontWeight: 'bold', fontSize: '3rem'}}>Susah Cari Musisi?</h1>
            <p style={{fontSize: '1.5rem', textAlign: 'flex-end', width: '55%', marginLeft: '45%' }}>Ayo unggah lowongan pengisi yang bakal tampil biar bikin keseruan ditempatmu! </p>
            <a href="/registration-tempat"><Button className='py-2 px-4 mt-5' style={{background: '#4361EE', fontWeight: '500'}}>DAFTAR SEBAGAI PEMILIK TEMPAT</Button></a>
          </Col>
          <Col className='text-start'>
            <img src={gambar2} className='w-auto col' />
          </Col>
        </Row>
        <img src={testimoni} alt="testimoni" className='w-auto my-5' />
      </div>
    <Footer />
    </>
  )
}

export default LandingPage