import React, { useEffect } from 'react'
import { getUserById } from '../../features/user/AuthSlice'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Layout from '../../components/layout/LayoutTempat'
import './responsive.css'
import { Row, Col, Container } from 'react-bootstrap'
import { MdArrowBackIosNew } from 'react-icons/md'

const ProfilePelamar = (props) => {
  const { gig_id } = props
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
        <Layout>
          <Container className='text-center my-5'>
            <Row>
              <Col>
                <a href={`/lowongan`} style={{color: '#4361EE', background: 'none', border: 'none', alignItems: 'center', display: 'flex'}}><MdArrowBackIosNew />  KEMBALI</a>
              </Col>
              <Col>
                <h1 className='fw-bold pb-3 title'>Profil</h1>
              </Col>
              <Col></Col>
            </Row>
          </Container>
          <div className='container-profile-musisi container-fluid w-75' >
            <img src={user?.user?.user_photo} className="mx-auto d-block mb-3" style={{width:'200px',height:'200px', borderRadius:'999px', objectFit:'cover', objectPosition:'center'}} alt={user?.user?.user_name}/>
            <p className='fw-bold text-center' style={{fontSize:'36px'}}>{user?.user?.user_name}</p>
            <p className='text-center mt-2' style={{color:'#4361EE' , fontSize:'24px'}}> Tentang </p>
            <hr></hr>
            <p>{user?.user?.user_description}</p>
        </div>
        </Layout>
    </div>
  )
}

export default ProfilePelamar