import React, {useEffect, useState} from 'react'
import Navbar from '../../components/header/NavbarTempat'
import Footer from '../../components/footer/FooterComponent'
import { Container, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updateOwner, updateOwnerPassword, reset, getOwnerById } from '../../features/owner/AuthSlice'
import { useParams } from 'react-router-dom'
import { AiFillEyeInvisible } from 'react-icons/ai'

const ProfileTempat = () => {
    const { owner } = useSelector((state) => state.authOwner)

    const [formData, setFormData] = useState({
        owner_name: "",
        owner_email: "",
        owner_photo: "",
    })

    const [formDataPassword, setFormDataPassword] = useState({
        password: "",
        verifyPassword: "",
    })

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        (async () => {
            const data = await dispatch(getOwnerById(id))

            setFormData({
                owner_name: data.payload.owner.owner_name,
                owner_email: data.payload.owner.owner_email,
            })

            setFormDataPassword({
                password: "",
                verifyPassword: "",
            })

        })()

    }, [])

    const onSubmit = (e) => {
        e.preventDefault()

        const form = new FormData()
        form.append("owner_name", formData.owner_name)
        form.append("owner_email", formData.owner_email)
        form.append("owner_photo", formData.owner_photo)

        dispatch(updateOwner({id, owner: form}))
        dispatch(updateOwnerPassword({id, owner: formDataPassword}))
        // dispatch(reset())
        // window.location.href = '/lowongan'
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
        setFormDataPassword((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.files[0],
        }))
    }

    const handleShowPassword = () => {
        const password = document.getElementById('password')
        const verifyPassword = document.getElementById('verifyPassword')

        if (password.type === 'password') {
            password.type = 'text'
        } else {
            password.type = 'password'
        }

        if (verifyPassword.type === 'password') {
            verifyPassword.type = 'text'
        } else {
            verifyPassword.type = 'password'
        }
    }

    const Style = {
        input : {
            border: "2px solid #ECECEC"
        },
        form : {
            width: "50%",
            margin: "2rem auto"
        }
    }

    return (
        <>
        <Navbar id={owner.id} />
            <Container className="my-5">
            <h1 style={{fontSize: '3rem', fontWeight: 'bold', textAlign: 'center',  margin: '5rem 0 1rem'}}>Edit Profile</h1>
            <Form onSubmit={onSubmit} style={Style.form}>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label>Nama</Form.Label>
                        <Form.Control 
                        type="text" 
                        name='owner_name'
                        value={formData.owner_name}
                        onChange={onChange}
                        style={Style.input} />
                    </Form.Group>
                    <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type="email" 
                        name='owner_email'
                        value={formData.owner_email}
                        onChange={onChange}
                        style={Style.input} />
                    </Form.Group>
                    <Form.Group className="mb-3 text-start position-relative" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            id="password"
                            type="password" 
                            name='password'
                            value={formDataPassword.password}
                            onChange={onChange}
                            style={Style.input} 
                        />
                            <span style={{right: '10px', top: '53%', color: 'grey'}} className='position-absolute' onClick={handleShowPassword}>
                                <AiFillEyeInvisible/>
                            </span>
                    </Form.Group>
                    <Form.Group className="mb-3 text-start position-relative" >
                        <Form.Label>Konfirmasi Password</Form.Label>
                        <Form.Control 
                            id="verifyPassword"
                            type="password" 
                            name='verifyPassword'
                            value={formDataPassword.verifyPassword}
                            onChange={onChange}
                            style={Style.input} 
                        />
                            <span style={{right: '10px', top: '53%', color: 'grey'}} className='position-absolute' onClick={handleShowPassword}>
                                <AiFillEyeInvisible/>
                            </span>
                    </Form.Group>
                    <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Foto</Form.Label>
                    <Form.Control 
                    type="file"
                    size="lg" 
                    multiple
                    name='owner_photo'
                    onChange={handleChange} 
                    style={Style.input} />
                </Form.Group>
                    <Button type='submit' className='py-3 my-3 w-100' style={{background: '#4361EE', fontWeight: '500'}}>SUBMIT</Button>
                    <Button href='/lowongan' className='py-3 w-100' style={{background: '#ECECEC', fontWeight: '500', border: 'none', color: '#4361EE'}}>KEMBALI</Button>
                </Form>
            </Container>
        <Footer />
        </>
    )
}

export default ProfileTempat