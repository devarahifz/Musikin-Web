import React, { useEffect } from 'react'
import { getUserById } from '../../features/user/AuthSlice'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../../components/layout/LayoutMusisi'
import './responsive.css'
const ProfileMusisi = () => {
  const { user } = useSelector((state) => state.authUser)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    (async () => {
      await dispatch(getUserById(id))
    })()
  }, [])
  // style={{marginRight: '185px',marginLeft:'185px', marginTop:'64px' , marginBottom:'64px'}}
  return (
    <div>
        <Layout>
        <div className='container-profile-musisi container-fluid w-75' >
            <h1 className='text-center fw-bold mb-5 pb-3 mt-5 title'>Profil</h1>
            <img src={user?.user?.user_photo} className="mx-auto d-block mb-3" style={{width:'200px',height:'200px', borderRadius:'999px', objectFit:'cover', objectPosition:'center'}} alt={user?.user?.user_name}/>
            <p className='fw-bold text-center' style={{fontSize:'36px'}}>{user?.user?.user_name}</p>
            <a href={`/profile/edit/${id}`} style={{textDecoration: 'none'}}><button className='btn btn-primary mx-auto d-block mb-4' style={{fontSize:'16px'}}>EDIT PROFIL</button></a>
            <p className='text-center mt-2' style={{color:'#4361EE' , fontSize:'24px'}}> Tentang </p>
            <hr></hr>
            <p>{user?.user?.user_description}</p>
        </div>
        </Layout>
    </div>
  )
}

export default ProfileMusisi