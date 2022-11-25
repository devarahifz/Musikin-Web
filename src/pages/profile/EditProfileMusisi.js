import React, { useState, useEffect} from 'react'
import NavbarMusisi from '../../components/header/NavbarMusisi'
import Footer from '../../components/footer/FooterComponent'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateUser, updateUserPassword, getUserById } from '../../features/user/AuthSlice'
import { AiFillEyeInvisible } from 'react-icons/ai'

const EditProfileMusisi = () => {
  const { user } = useSelector((state) => state.authUser)
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_photo: "",
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
    form.append("user_name", formData.user_name)
    form.append("user_email", formData.user_email)
    form.append("user_photo", formData.user_photo)
    form.append("user_phone", formData.user_phone)

    dispatch(updateUser({id, user: form}))
    dispatch(updateUserPassword({id, user: formDataPassword}))

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

  return (
    <div>
        <NavbarMusisi id={user?.user?.id}/>
        <form onSubmit={onSubmit} className='container-profile-musisi mx-auto' style={{maxWidth:'640px', marginRight: '400px',marginLeft:'400px', marginTop:'64px' , marginBottom:'64px'}}>
            <h1 className='text-center fw-bold mb-5 pb-3'>Edit Profil</h1>
            <p> Foto Profil </p>
            <div className='row mx-auto'>
              <div className='col-12 col-md-4'>
              <img src={user?.user?.user_photo} className="mb-3" style={{width:'200px',height:'200px', borderRadius:'999px', objectFit:'cover', objectPosition:'center'}} alt={formData.user_name}></img>
              </div>
              <div className='col mt-5'>
                <input 
                  className='btn btn-light fw-semibold mb-2' 
                  style={{border: '2px solid #4361EE' , color: '#4361EE'}}
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
              style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px', height:'48px'}} 
              type="text" 
              name="user_name"
              value={formData.user_name}
              onChange={onChange}
            />
            <p className='m-0'>Email</p>
            <input 
              className='w-100  p-2 mb-3' 
              style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px', height:'48px'}} 
              type="email" 
              name="user_email"
              value={formData.user_email}
              onChange={onChange}
            />

            <div className='position-relative'>
            <p className='m-0'>Password</p>
            <input 
              className='w-100  p-2 mb-3' 
              style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px', height:'48px'}} 
              id="password"
              type="password" 
              name="password"
              value={formDataPassword.password}
              onChange={onChange}
              />
              <span style={{right: '20px', top: '41%', color: 'grey'}} className='position-absolute' onClick={handleShowPassword}>
                <AiFillEyeInvisible/>
              </span>
              </div>

            <div className='position-relative'>
            <p className='m-0'>Konfirmasi Password</p>
            <input 
              className='w-100  p-2 mb-3 position-relative' 
              style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px', height:'48px'}} 
              id="verifyPassword"
              type="password" 
              name="verifyPassword"
              value={formDataPassword.verifyPassword}
              onChange={onChange}
              />
              <span style={{right: '20px', top: '41%', color: 'grey'}} className='position-absolute' onClick={handleShowPassword}>
                <AiFillEyeInvisible/>
              </span>
            </div>
            <p className='m-0'>Nomor Handphone</p>
            <input 
              className='w-100  p-2 mb-3' 
              style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px', height:'48px'}} 
              type="number"
              name='user_phone' 
              value={formData.user_phone}
              onChange={onChange}
            />
            <p className='m-0'>Tentang</p>
            <textarea 
              className='w-100  p-2 mb-3' 
              rows="4" 
              style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px'}} 
              value="Lorem Ipsum"
            />
            <button type='submit' className='btn btn-primary w-100 mb-1'>SIMPAN</button>
            <a href={`/profile/${id}`} className='btn btn-light w-100' style={{backgroundColor: '#ECECEC', color: '#4361EE'}}>Kembali</a>
        </form>
        <Footer/>
    </div>
  )
}

export default EditProfileMusisi