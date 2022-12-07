import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from '../../assets/images/Musikin Logo Login.png'
import { login, reset } from "../../features/admin/AuthSlice";

const LoginAdmin = () => {

    const [formData, setFormData] = useState({
        userName: "",
        password: "",
    });

    const { userName, password } = formData;

    const dispatch = useDispatch();

    const { admin, status, error } = useSelector((state) => state.authAdmin);

    useEffect(() => {
        if (admin) {
            window.location.href = "/admin/dashboard";
        }

        if (error) {
            alert(error.message);
        }

        dispatch(reset());
    }, [admin, error, dispatch]);

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            userName: userName,
            password: password
        }
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
    <Form></Form>
        <div style={card}>
            <img src={logo} alt="logo" />
            <p style={{fontSize: '1.5rem', margin: '1rem 0 2rem'}}>Masuk <b>Admin</b></p>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="text"
                    name="userName" 
                    value={userName} 
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
                <Button type='submit' className='py-3 w-100' style={{background: '#4361EE', fontWeight: '500'}}>MASUK</Button>
            </Form>
        </div>
    </>
    )
}

export default LoginAdmin