import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import NavbarLanding from '../../components/header/NavbarLanding'
import Footer from '../../components/footer/FooterComponent'
import signal from '../../assets/images/Signal.png'
import gambar1 from '../../assets/images/Playing jazz-pana.png'
import gambar2 from '../../assets/images/Hiring-pana.png'
import testimoni from '../../assets/images/Testimoni.png'
import Carousel from '../../components/Carousel/Carousel'
import "./responsive.css"

const LandingPage = () => {
  return (
    <>
    <NavbarLanding />
      <div className='container mx-auto' style={{textAlign: 'center'}}>
        <img className="img-fluid"src={signal} alt="signal" />
        <Row className='align-items-center'>
          <Col className='text-end'>
            <img src={gambar1} alt="band" className='img-fluid col ilu-1 align-items-center'/>
          </Col>
          <Col className='text-start landing-title-1 col-sm-6 col-12'>
            <h1 style={{fontWeight: 'bold', fontSize: '3rem'}}>Mau Ngisi Live Music?</h1>
            <p style={{fontSize: '1.5rem', width:'80%'}}>Ayo daftarin dirimu biar bisa jadi penampil ditempat yang kamu pengen!</p>
            <a href="/registration"><Button className='py-2 px-4 mt-5' style={{background: '#4361EE', fontWeight: '500'}}>DAFTAR SEBAGAI MUSISI</Button></a>
          </Col>
        </Row>
        <Row className='align-items-center mt-5'>
          <Col className='text-end landing-title-2 col-sm-6 col-12'>
            <h1 style={{fontWeight: 'bold', fontSize: '3rem'}}>Susah Cari Musisi?</h1>
            <p style={{fontSize: '1.5rem', textAlign: 'end', width: '100%', margin :"0" }}>Ayo unggah lowongan pengisi yang bakal tampil biar bikin keseruan ditempatmu! </p>
            <a href="/registration-tempat"><Button className='py-2 px-4 mt-5' style={{background: '#4361EE', fontWeight: '500'}}>DAFTAR SEBAGAI TEMPAT</Button></a>
          </Col>
          <Col className='text-start coloumn-2'>
            <img src={gambar2} alt="recruitment" className='img-fluid col ilu-2' />
          </Col>
        </Row>
        <img className=" img-fluid mt-5"src={testimoni} alt="testimoni"/>
        {/* <Carousel /> */}
      </div>
    <Footer />
    </>
  )
}

export default LandingPage