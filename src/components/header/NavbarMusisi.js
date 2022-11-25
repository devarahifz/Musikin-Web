import { useDispatch, useSelector } from 'react-redux';
import { Container, Nav, Navbar, Button } from 'react-bootstrap/';
import logo from '../../assets/images/Musikin Logo Colored 32 1.png'
import { logout, reset } from "../../features/user/AuthSlice";
import { Link } from 'react-router-dom';

const NavbarMusisi = (props) => {
    const { id } = props
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authUser);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        window.location.href = "/";
    };

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
            <Link to="/">
                <Navbar.Brand style={brand}><img src={logo} alt="logo" />Musikin</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Container style={{display: 'flex', justifyContent: 'center',}}>
                <Nav >
                    <Nav.Link className="me-3" style={font}>
                        <Link to="/home-musisi"> DAFTAR </Link>
                    </Nav.Link>
                    <Nav.Link className="me-3" style={font}>
                        <Link to="/riwayat"> RIWAYAT </Link>
                    </Nav.Link>
                    <Nav.Link className="me-3" style={font}>
                        <Link to={`/profile/${id}`}> PROFILE </Link>
                    </Nav.Link>
                </Nav>
                </Container>
                <Nav className='text-center'>
                    <Nav.Link><Button className='py-2 px-4' onClick={onLogout} style={button}>KELUAR</Button></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>    
    )
}

export default NavbarMusisi