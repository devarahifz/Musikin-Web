import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateUser, updateUserPassword, getUserById, reset } from '../../features/user/AuthSlice'
import { AiFillEyeInvisible } from 'react-icons/ai'
import Layout from '../../components/layout/LayoutMusisi'
import { Button, Modal, Form } from "react-bootstrap";
import { MdArrowForwardIos } from 'react-icons/md'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './responsive.css'

const EditProfileMusisi = () => {
  const { user } = useSelector((state) => state.authUser)
  const [imagePreview, setImagePreview] = useState(null)
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_photo: "",
    user_description: "",
  })

  const [formDataPassword, setFormDataPassword] = useState({
    password: "",
    verifyPassword: "",
  })

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    (async () => {
      const data = await dispatch(getUserById(id))

      setFormData({
        user_name: data.payload.user.user_name,
        user_email: data.payload.user.user_email,
        user_phone: data.payload.user.user_phone,
        user_description: data.payload.user.user_description,
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
      form.append("user_name", formData.user_name)
      form.append("user_email", formData.user_email)
      form.append("user_photo", formData.user_photo)
      form.append("user_phone", formData.user_phone)
      form.append("user_description", formData.user_description)
      
      await dispatch(updateUser({id, user: form}))
      dispatch(reset())
      
      window.location.href = `/profile/${id}`
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
        await dispatch(updateUserPassword({id, user: formDataPassword}))
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
      setShow(false)
      // window.location.href = `/profile/edit/${id}`
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
    setImagePreview(URL.createObjectURL(e.target.files[0]))
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

  return (
    <div>
      <Layout>
        <div className='container row d-flex mx-auto mt-5 w-full'>
          <div className='col-8 offset-2'>
            <h1 className='text-center fw-bold mb-5 pb-3 title'>Edit Profil</h1>
          </div>
          <div className='col-2'>
            <Button onClick={handleShow} className='float-right W-100 d-none d-sm-inline-flex' style={{color: '#4361EE', background: 'none', border: 'none', alignItems: 'center', display: 'flex', fontWeight: '500'}}>GANTI PASSWORD  <MdArrowForwardIos /></Button>
          </div>
        </div>
        <form onSubmit={onSubmit} className='container-profile-musisi mx-auto' style={{maxWidth:'50%',minWidth: "300px", marginRight: '400px',marginLeft:'400px', marginTop:'32px' , marginBottom:'64px'}}>
          <p> Foto Profil </p>
          <div className='row mx-auto'>
            <div className='col-12 col-md-4'>
            {
              imagePreview 
              ?
              <img src={imagePreview} className="mb-3" style={{width:'200px',height:'200px', borderRadius:'999px', objectFit:'cover', objectPosition:'center'}} alt={formData.user_name}></img>
              :
              <img src={user?.user?.user_photo} className="mb-3" style={{width:'200px',height:'200px', borderRadius:'999px', objectFit:'cover', objectPosition:'center'}} alt={formData.user_name}></img>
            }
            </div>
            <div className='col mt-5'>
              <input 
                className='btn btn-light fw-semibold mb-2' 
                style={{border: '2px solid #4361EE' , color: '#4361EE',width: '250px'}}
                type="file" 
                name="user_photo"
                onChange={handleChange}
              />
              <p className='text-muted pt-2 ps-2' style={{fontSize:'16px'}}>Ukuran foto maksimal 5mb</p>
            </div>
          </div>
          <p className='m-0'>Nama</p>
          <input 
            className='w-100  p-2 mb-3' 
            style={{border:'2px solid #ECECEC', borderRadius:'8px',  height:'48px'}} 
            type="text" 
            name="user_name"
            value={formData.user_name}
            onChange={onChange}
          />
          <p className='m-0'>Email</p>
          <input 
            className='w-100  p-2 mb-3' 
            style={{border:'2px solid #ECECEC', borderRadius:'8px',  height:'48px'}} 
            type="email" 
            name="user_email"
            value={formData.user_email}
            onChange={onChange}
          />
          <Button onClick={handleShow} className='float-right W-100 d-block d-sm-none p-0 py-1' style={{color: '#4361EE', background: 'none', border: 'none', alignItems: 'center', display: 'flex', fontWeight: '500'}}>GANTI PASSWORD  <MdArrowForwardIos /></Button>
          <p className='m-0'>Nomor Handphone</p>
          <input 
            className='w-100  p-2 mb-3' 
            style={{border:'2px solid #ECECEC', borderRadius:'8px',  height:'48px'}} 
            type="number"
            name='user_phone' 
            value={formData.user_phone}
            onChange={onChange}
          />
          <p className='m-0'>Tentang</p>
          <textarea 
            className='w-100  p-2 mb-3' 
            rows="4" 
            style={{border:'2px solid #ECECEC', borderRadius:'8px'}} 
            name="user_description"
            value={formData.user_description}
            onChange={onChange}
          />
          <button type='submit' className='btn btn-primary w-100 mb-1' style={{background: '#4361EE'}}>SIMPAN</button>
          <a onClick={handleShowAlert} className='btn btn-light w-100' style={{backgroundColor: '#ECECEC', color: '#4361EE'}}>KEMBALI</a>
        </form>

        <Modal show={showAlert} onHide={handleCloseAlert} backdrop="static" keyboard={false} style={{width: '20%', margin: '0 40%'}} >
          <Modal.Body className='py-5 text-center'>
            <div className='mb-3'>
              <Modal.Title>Data belum disimpan !</Modal.Title>
            </div>
            <Button onClick={handleCloseAlert} variant="primary" type="submit" className='me-2' style={{background: '#4361EE', width: '35%'}} >
              UBAH
            </Button>
            <Button href={`/profile/${id}`} variant="primary" type="submit" className='ms-2' style={{background: 'none', border: '2px solid #4361EE', color: '#4361EE', width: '35%'}} >
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
                  style={{border:'2px solid #ECECEC', borderRadius:'8px',  height:'48px'}} 
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
      </Layout>
    </div>
  )
}

export default EditProfileMusisi