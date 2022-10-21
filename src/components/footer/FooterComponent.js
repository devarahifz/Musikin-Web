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
    const font ={
        fontSize: 12,
    }
    const brand = {
        fontSize: 32,
    }
    const copyright = {
        marginTop: 80,
        fontSize: 12,
    }

    return (
        <Container fluid style={background} className='fixed-bottom pt-5'>
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
                            <p className='mb-2'>Masuk Musisi</p>
                            <p className='mb-2'>Masuk Tempat</p>
                            <p className='mb-2'>Daftar Musisi</p>
                            <p className='mb-2'>Daftar Tempat</p>
                        </Col>
                        <Col style={font}>
                            <h6 className='mb-3'>Eksplorasi</h6>
                            <p className='mb-2'>Halaman Utama</p>
                            <p className='mb-2'>Tentang Kami</p>
                            <p className='mb-2'>Kontak</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default NavbarLanding;