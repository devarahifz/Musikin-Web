import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavbarLanding from '../../components/header/NavbarLanding'
import logo from '../../assets/images/Musikin Logo Login.png'
import { login, reset } from "../../features/owner/AuthSlice";

const LoginTempat = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const dispatch = useDispatch();
    
    const { owner, status, error } = useSelector((state) => state.authOwner);

    useEffect(() => {
        if (owner) {
            window.location.href = "/lowongan";
        }

        if (error) {
            alert(error.message);
        }
        
        dispatch(reset());
    }, [owner, error, dispatch]);

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        };

        dispatch(login(data));
    };

    const card = {
        border: "2px solid #ECECEC",
        borderRadius: "12px",
        padding: "3rem 4.5rem",
        margin: "5rem auto",
        width: "30%",
        textAlign: 'center'
    }
    const link = {
        textDecoration: 'none'
    }
    const input = {
        border: "2px solid #ECECEC"
    }
    return (
        <>
        <NavbarLanding />
            <div style={card}>
                <img src={logo} alt="logo" />
                <p style={{fontSize: '1.5rem', margin: '1rem 0 2rem'}}>Masuk dengan akun <b>tempat</b></p>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="email"
                        name="email" 
                        value={email} 
                        onChange={onChange} 
                        style={input} />
                    </Form.Group>

                    <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        name="password"
                        value={password} 
                        onChange={onChange} 
                        style={input} />
                    </Form.Group>
                    <a href="#" style={link}>Lupa password?</a>
                    <br/>
                    <p style={{margin: '3rem 0'}}>
                        Belum punya akun <b>tempat</b>? <br/>
                        Klik <a href="/registration-tempat" style={link}>disini</a> untuk membuat akun.
                    </p>
                    <Button type='submit' className='py-3 w-100' style={{background: '#4361EE', fontWeight: '500'}}>MASUK</Button>
                </Form>
            </div>
        </>
    )
}

export default LoginTempat