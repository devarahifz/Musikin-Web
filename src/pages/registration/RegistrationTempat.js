import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavbarLanding from '../../components/header/NavbarLanding'
import logo from '../../assets/images/Musikin Logo Login.png'

const RegistrationTempat = () => {
    const card = {
        border: "2px solid #ECECEC",
        borderRadius: "12px",
        padding: "3rem 4.5rem",
        margin: "5rem auto",
        width: "30%",
        textAlign: 'center'
    }
    const input = {
        border: "2px solid #ECECEC"
    }
    return (
        <>
        <NavbarLanding />
            <div style={card}>
                <img src={logo} alt="logo" />
                <p style={{fontSize: '1.5rem', margin: '1rem 0 2rem'}}>Daftar akun sebagai <b>tempat</b></p>
                <Form>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label>Nama</Form.Label>
                        <Form.Control type="text" style={input} />
                    </Form.Group>
                    <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" style={input} />
                    </Form.Group>
                    <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" style={input} />
                    </Form.Group>
                    <Button type='submit' className='py-3 my-4 w-100' style={{background: '#4361EE', fontWeight: '500'}}>DAFTAR</Button>
                </Form>
            </div>
        </>
    )
}

export default RegistrationTempat