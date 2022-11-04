import { Container, Nav, Navbar, Button } from 'react-bootstrap/';
import logo from '../../assets/images/Musikin Logo Colored 32 1.png'

const NavbarMusisi = () => {
    const background = {
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
        padding: 18,
        paddingLeft: '10%',
        paddingRight: '10%',
    }
    const font ={
        color: 'black',
        fontWeight: '500',
    }
    const brand = {
        fontSize: 24,
        fontWeight: '500',
    }
    const button = {
        color: '#4361EE',
        fontWeight: '500',
        background: 'none',
        border: '2px solid #4361EE'
    }
    return (
        <Navbar style={background} collapseOnSelect expand="lg" sticky="top" >
            <Container fluid>
            <Navbar.Brand href="/" style={brand}><img src={logo} alt="logo" /> Musikin</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Container style={{display: 'flex', justifyContent: 'center',}}>
                <Nav >
                    <Nav.Link href="/home-musisi" className="me-3" style={font}>CARI</Nav.Link>
                    <Nav.Link href="/riwayat" className="me-3" style={font}>RIWAYAT</Nav.Link>
                    <Nav.Link href="/profile" className="me-3" style={font}>PROFIL</Nav.Link>
                </Nav>
                </Container>
                <Nav className='text-center'>
                    <Nav.Link href="#logout"><Button className='py-2 px-4' style={button}>KELUAR</Button></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>    
    )
}

export default NavbarMusisi