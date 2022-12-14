import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavbarLanding from '../../components/header/NavbarLanding'
import logo from '../../assets/images/Musikin Logo Login.png'
import { register, reset } from "../../features/owner/AuthSlice";
import { AiFillEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationTempat = () => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
        phone: "",
    });

    const { email, name, password, phone } = formData;

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
        padding: "3rem 3rem",
        margin: "5rem auto",
        minWidth :"300px",
        maxWidth:"30%",
        textAlign: 'center'
    }
    const input = {
        border: "2px solid #ECECEC"
    }
    return (
        <>
        <NavbarLanding />
            <div className="container w-full"style={card}>
                <img src={logo} alt="logo" />
                <p style={{fontSize: '1.5rem', margin: '1rem 0 2rem'}}>Daftar akun sebagai <b>pemilik tempat</b></p>
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

export default RegistrationTempat