import { Container, Navbar } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Musikin Logo Colored 32 1.png'

const NavbarAbout = () => {
    const background = {
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
        padding: 18,
        paddingLeft: '10%',
        paddingRight: '10%',
    }
    const brand = {
        fontSize: 24,
        fontWeight: '500',
    }
    return (
        <Navbar style={background} collapseOnSelect expand="lg" sticky="top" >
            <Container fluid style={{justifyContent: 'center'}}>
                <Link to="/">
                    <Navbar.Brand href="/" style={brand}><img src={logo} alt="logo" /> Musikin</Navbar.Brand>
                </Link>
            </Container>
        </Navbar>    
    )
}

export default NavbarAbout