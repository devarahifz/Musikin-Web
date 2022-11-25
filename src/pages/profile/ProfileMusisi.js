import React, { useEffect } from 'react'
import NavbarMusisi from '../../components/header/NavbarMusisi'
import Footer from '../../components/footer/FooterComponent'
import { getUserById } from '../../features/user/AuthSlice'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const ProfileMusisi = () => {
  const { user } = useSelector((state) => state.authUser)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    (async () => {
      await dispatch(getUserById(id))
    })()
  }, [])

  return (
    <div>
        <NavbarMusisi id={user?.data?.id}/>
        <div className='container-profile-musisi' style={{marginRight: '185px',marginLeft:'185px', marginTop:'64px' , marginBottom:'64px'}}>
            <h1 className='text-center fw-bold mb-5 pb-3'>Profil</h1>
            <img src={user?.user?.user_photo} className="mx-auto d-block mb-3" style={{width:'200px',height:'200px', borderRadius:'999px', objectFit:'cover', objectPosition:'center'}} alt={user?.user?.user_name}/>
            <p className='fw-bold text-center' style={{fontSize:'36px'}}>{user?.user?.user_name}</p>
            <a href={`/profile/edit/${id}`} style={{textDecoration: 'none'}}><button className='btn btn-primary mx-auto d-block mb-4' style={{fontSize:'16px'}}>EDIT PROFIL</button></a>
            <p className='text-center mt-2' style={{color:'#4361EE' , fontSize:'24px'}}> Tentang </p>
            <hr></hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque. Sapien nec sagittis aliquam malesuada bibendum arcu. Scelerisque fermentum dui faucibus in ornare. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Convallis aenean et tortor at. Felis eget velit aliquet sagittis id consectetur. Metus aliquam eleifend mi in nulla. Quis commodo odio aenean sed. Ultricies lacus sed turpis tincidunt. Adipiscing vitae proin sagittis nisl rhoncus. Interdum velit laoreet id donec ultrices.
                <br></br> <br></br>
            Augue neque gravida in fermentum et. Faucibus pulvinar elementum integer enim neque volutpat ac. Id venenatis a condimentum vitae sapien. Et pharetra pharetra massa massa ultricies mi quis. Interdum posuere lorem ipsum dolor sit. Auctor augue mauris augue neque gravida. Enim ut tellus elementum sagittis vitae et leo duis. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Elementum sagittis vitae et leo duis ut diam quam. Risus feugiat in ante metus dictum at. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Diam vel quam elementum pulvinar etiam non. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Arcu cursus vitae congue mauris rhoncus. Nullam non nisi est sit amet facilisis magna. At urna condimentum mattis pellentesque id. Maecenas sed enim ut sem viverra. At ultrices mi tempus imperdiet nulla. Sed faucibus turpis in eu mi bibendum neque. Laoreet non curabitur gravida arcu ac tortor dignissim.
            </p>
        </div>
        <Footer/>
    </div>
  )
}

export default ProfileMusisi