import { Container, Row, Col } from 'react-bootstrap/';
import logo from '../../assets/images/Musikin Logo Colored 32 2.png'

function NavbarLanding() {
    const background = {
        backgroundColor: '#4361EE',
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
        padding: 18,
        paddingLeft: '10%',
        paddingRight: '10%',
        color: 'white',
    }
    const font = {
        fontSize: 12,
    }
    const link = {
        textDecoration: 'none',
        color: 'white',
        display: 'block',
    }
    const brand = {
        fontSize: 32,
    }
    const copyright = {
        marginTop: 80,
        fontSize: 12,
    }

    return (
        <Container fluid style={background} className='pt-5'>
            <Row>
                <Col>
                    <Row>
                        <Col sm='4'>
                            <img src={logo} alt="logo" className='row' />
                            <h1 className='row' style={brand}>Musikin</h1>
                            <p className='row' style={font}>
                                Cari live music keinginan kamu dan jadilah bintangnya
                            </p>
                            <p className='row' style={copyright}>
                                Copyright &copy; 2022. KPL. All rights reserved.
                            </p>
                        </Col>
                        <Col></Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col style={font}>
                            <h6 className='mb-3'>Pengguna</h6>
                            <a href='/login' className='mb-2' style={link}>Masuk Musisi</a>
                            <a href='/login-tempat' className='mb-2' style={link}>Masuk Tempat</a>
                            <a href='/registration' className='mb-2' style={link}>Daftar Musisi</a>
                            <a href='/registration-tempat' className='mb-2' style={link}>Daftar Pemilik Tempat</a>
                        </Col>
                        <Col style={font}>
                            <h6 className='mb-3'>Eksplorasi</h6>
                            <a href='/' className='mb-2' style={link}>Halaman Utama</a>
                            <a href='/about' className='mb-2' style={link}>Tentang Kami</a>
                            <p className='mt-2'>Kontak</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default NavbarLanding;