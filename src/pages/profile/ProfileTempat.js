import React, {useEffect, useState} from 'react'
import Navbar from '../../components/header/NavbarTempat'
import Footer from '../../components/footer/FooterComponent'
import { Container, Form, Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updateOwner, updateOwnerPassword, reset, getOwnerById } from '../../features/owner/AuthSlice'
import { useParams } from 'react-router-dom'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { MdArrowForwardIos } from 'react-icons/md'

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
        dispatch(reset())  

        window.location.href = '/lowongan'
    }

    const onSubmitPassword = (e) => {
        (async () => {
            e.preventDefault()
            await dispatch(updateOwnerPassword({id, owner: formDataPassword}))
            window.location.href = `/profile-owner/${id}`
        })()
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

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        <Navbar id={owner?.owner?.id} />
            <Container className="my-5">
            <div className='container row d-flex mx-auto mt-5' style={{alignItems: 'center'}}>
                <div className='col-8 offset-2'>
                    <h1 style={{fontSize: '3rem', fontWeight: 'bold', textAlign: 'center'}}>Edit Profile</h1>
                </div>
                <div className='col-2'>
                    <Button onClick={handleShow} className='float-right W-100' style={{color: '#4361EE', background: 'none', border: 'none', alignItems: 'center', display: 'flex', fontWeight: '500'}}>GANTI PASSWORD  <MdArrowForwardIos /></Button>
                </div>
            </div>
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
                <Form.Group controlId="formFileLg" className="mb-3 d-none">
                    <Form.Label>Foto</Form.Label>
                    <Form.Control 
                        type="file"
                        size="lg" 
                        multiple
                        name='owner_photo'
                        onChange={handleChange} 
                        style={Style.input} 
                    />
                </Form.Group>
                    <Button type='submit' className='py-3 my-3 w-100' style={{background: '#4361EE', fontWeight: '500'}}>SUBMIT</Button>
                    <Button href='/lowongan' className='py-3 w-100' style={{background: '#ECECEC', fontWeight: '500', border: 'none', color: '#4361EE'}}>KEMBALI</Button>
                </Form>
            </Container>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body className='p-5'>
                    <div style={{textAlign: 'center', marginTop: '0px'}}>
                        <Modal.Title style={{fontSize: '36px', fontWeight: 'bold', width: '100%'}}>Ganti Password</Modal.Title>
                    </div>
                    <Form onSubmit={onSubmitPassword}>
                    <Form.Group className="mb-3 mt-4 position-relative">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px', height:'48px'}} 
                        id="password"
                        type="password" 
                        name="password"
                        value={formDataPassword.password}
                        onChange={onChange}
                        />
                        <span style={{right: '20px', top: '55%', color: 'grey'}} className='position-absolute' onClick={handleShowPassword}>
                        <AiFillEyeInvisible/>
                        </span>
                    </Form.Group>
                    <Form.Group className="mb-3 position-relative">
                        <Form.Label>Konfirmasi Password</Form.Label>
                        <Form.Control 
                        style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px', height:'48px'}} 
                        id="verifyPassword"
                        type="password" 
                        name="verifyPassword"
                        value={formDataPassword.verifyPassword}
                        onChange={onChange}
                        />
                        <span style={{right: '20px', top: '55%', color: 'grey'}} className='position-absolute' onClick={handleShowPassword}>
                        <AiFillEyeInvisible/>
                        </span>
                    </Form.Group>
                    <div className='text-center mt-5'>
                        <Button variant="primary" type="submit" className='w-100' style={{background: '#4361EE'}} >
                        SIMPAN
                        </Button>
                    </div>
                    </Form>
                    <div className='text-center mt-2'>
                    <Button onClick={handleClose} className='w-100 btn-light' style={{background: '#ECECEC', color: '#4361EE'}}>
                        BATAL
                    </Button>
                    </div>
                </Modal.Body>
            </Modal>
        <Footer />
        </>
    )
}

export default ProfileTempat