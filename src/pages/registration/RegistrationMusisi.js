import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavbarLanding from '../../components/header/NavbarLanding'
import logo from '../../assets/images/Musikin Logo Login.png'
import { register, reset } from "../../features/user/AuthSlice";
import { AiFillEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationMusisi = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
        phone: "",
    });

    const { email, name, password, phone } = formData;

    const dispatch = useDispatch();

    const { user, status, error } = useSelector((state) => state.authUser);

    useEffect(() => {
        if (user) {
            window.location.href = "/login";
        }

        if (error) {
            alert(error.message);
        }

        dispatch(reset());
    }, [user, error, dispatch]);

    const onChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(register(formData));
        if (email === "" || password === "" || name === "" || phone === "" || status === "failed" || error === "Unauthorized") {
            toast.error('Harap masukkan Form dengan sesuai', { 
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                icon: false,
            });
        }
    };

    const handleShowPassword = () => {
        const password = document.getElementById('password')

        if (password.type === 'password') {
            password.type = 'text'
        } else {
            password.type = 'password'
        }
    }

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
                <p style={{fontSize: '1.5rem', margin: '1rem 0 2rem'}}>Daftar akun sebagai <b>musisi</b></p>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label>Nama</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="name"
                        value={name} 
                        onChange={onChange} 
                        style={input} />
                    </Form.Group>
                    <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="email" 
                        name="email"
                        value={email} 
                        onChange={onChange} 
                        style={input} />
                    </Form.Group>
                    <Form.Group className="mb-3 text-start position-relative">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            id="password"
                            type="password"
                            name="password" 
                            value={password} 
                            onChange={onChange} 
                            style={input} 
                        />
                            <span style={{right: '10px', top: '53%', color: 'grey'}} className='position-absolute' onClick={handleShowPassword}>
                                <AiFillEyeInvisible/>
                            </span>
                    </Form.Group>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label>Nomor Handphone</Form.Label>
                        <Form.Control 
                        type="number"
                        name="phone" 
                        value={phone} 
                        onChange={onChange} 
                        style={input} />
                    </Form.Group>
                    <Button type='submit' className='py-3 my-4 w-100' style={{background: '#4361EE', fontWeight: '500'}}>DAFTAR</Button>
                </Form>
            </div>
        </>
    )
}

export default RegistrationMusisi