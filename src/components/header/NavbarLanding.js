import { Container, Nav, Navbar, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
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
            <Link to= "/">
                <Navbar.Brand href="/" style={brand}><img src={logo} alt="logo" /> Musikin</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-center'>
                <Nav className="me-auto"></Nav>
                <Nav className="justify-content-center">
                    <Nav.Link className="me-5" style={font}>
                        <Link to="/login"> MASUK </Link>
                    </Nav.Link>
                    <Nav.Link className="me-3" style={font}>
                        <Link to="/registration"> DAFTAR </Link>
                    </Nav.Link>
                </Nav>
                <Nav className='justify-content-center'>
                    <Nav.Link>
                        <Link to="/login-tempat">
                            <Button className='py-2 px-4' style={{background: '#4361EE', fontWeight: '500'}}>Sebagai Pemilik Tempat</Button>
                        </Link>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarLanding;