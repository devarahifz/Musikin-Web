import React, {useEffect, useState} from 'react'
import Navbar from '../../components/header/NavbarTempat'
import Footer from '../../components/footer/FooterComponent'
import { Container, Form, Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updateOwner, updateOwnerPassword, reset, getOwnerById } from '../../features/owner/AuthSlice'
import { useParams } from 'react-router-dom'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { MdArrowForwardIos } from 'react-icons/md'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './responsive.css'

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
        (async () => {
            e.preventDefault()
            
            const form = new FormData()
            form.append("owner_name", formData.owner_name)
            form.append("owner_email", formData.owner_email)
            form.append("owner_photo", formData.owner_photo)
            
            await dispatch(updateOwner({id, owner: form}))
            dispatch(reset())  
            
            window.location.href = '/lowongan'
        })()
    }

    const onSubmitPassword = (e) => {
        (async () => {
            e.preventDefault()
            if (formDataPassword.password === "" || formDataPassword.verifyPassword === "" || formDataPassword.password !== formDataPassword.verifyPassword) {
                toast.error('Pastikan Password Anda sudah sesuai', { 
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
                setFormDataPassword({
                    password: "",
                    verifyPassword: "",
                })
            } else {
                await dispatch(updateOwnerPassword({id, owner: formDataPassword}))
                toast.success('Ganti Password Berhasil', {
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
                setFormDataPassword({
                    password: "",
                    verifyPassword: "",
                })
            }
        })()
        setShow(false)
        // window.location.href = `/profile-owner/${id}`
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

    const [showAlert, setShowAlert] = useState(false);
    const handleCloseAlert = () => setShowAlert(false);
    const handleShowAlert = () => setShowAlert(true);

    const Style = {
        input : {
            border: "2px solid #ECECEC"
        },
        form : {
            maxWidth: "50%",
            minWidth: "300px",
            margin: "2rem auto"
        }
    }

    return (
        <>
        <Navbar id={owner?.owner?.id} />
            <Container className="my-5">
            <div className='container row d-flex mx-auto mt-5' style={{alignItems: 'center'}}>
                <div className='col-12 col-sm-8 offset-0 offset-sm-2'>
                    <h1 className='title' style={{ fontWeight: 'bold', textAlign: 'center'}}>Edit Profile</h1>
                </div>
                <div className='col-12 col-sm-2'>
                    <Button onClick={handleShow} className='float-right W-100 d-none d-sm-inline-flex' style={{color: '#4361EE', background: 'none', border: 'none', alignItems: 'center', display: 'flex', fontWeight: '500'}}>GANTI PASSWORD  <MdArrowForwardIos /></Button>
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
                <Button onClick={handleShow} className='float-right W-100 d-block d-sm-none p-0 py-2' style={{color: '#4361EE', background: 'none', border: 'none', alignItems: 'center', display: 'flex', fontWeight: '500'}}>GANTI PASSWORD  <MdArrowForwardIos /></Button>
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
                    <Button type='submit' className='py-2 my-3 w-100' style={{background: '#4361EE', fontWeight: '500'}}>SUBMIT</Button>
                    <Button onClick={handleShowAlert} className='py-2 w-100' style={{background: '#ECECEC', fontWeight: '500', border: 'none', color: '#4361EE'}}>KEMBALI</Button>
                </Form>
            </Container>

            <Modal show={showAlert} onHide={handleCloseAlert} backdrop="static" keyboard={false} style={{width: '20%', margin: '0 40%'}} >
                <Modal.Body className='py-5 text-center'>
                    <div className='mb-3'>
                    <Modal.Title>Data belum disimpan !</Modal.Title>
                    </div>
                    <Button onClick={handleCloseAlert} variant="primary" type="submit" className='me-2' style={{background: '#4361EE', width: '30%'}} >
                    UBAH
                    </Button>
                    <Button href={`/lowongan`} variant="primary" type="submit" className='ms-2' style={{background: 'none', border: '2px solid #4361EE', color: '#4361EE', width: '30%'}} >
                    BATAL
                    </Button>
                </Modal.Body>
            </Modal>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
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