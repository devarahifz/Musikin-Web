import { Container, Nav, Navbar, Button } from 'react-bootstrap/';
import logo from '../../assets/images/Musikin Logo Colored 32 1.png'

function NavbarLanding() {
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

    return (
        <Navbar style={background} collapseOnSelect expand="lg" sticky="top" >
            <Container fluid>
            <Navbar.Brand href="/" style={brand}><img src={logo} alt="logo" /> Musikin</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-center'>
                <Nav className="me-auto"></Nav>
                <Nav className="justify-content-center">
                    <Nav.Link href="/login" className="me-5" style={font}>MASUK</Nav.Link>
                    <Nav.Link href="/registration" className="me-3" style={font}>DAFTAR</Nav.Link>
                </Nav>
                <Nav className='justify-content-center'>
                    <Nav.Link href="/login-tempat"><Button className='py-2 px-4' style={{background: '#4361EE', fontWeight: '500'}}>SEBAGAI TEMPAT</Button></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarLanding;