import React, { useEffect } from 'react'
import Layout from '../../components/layout/LayoutTempat'
import { Card, Row, Col, Container, Button } from 'react-bootstrap'
import { HiPhone } from 'react-icons/hi'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { getAllApplications, updateApplicationStatus } from '../../features/application/ApplicationSlice'
import { getUserById } from '../../features/user/AuthSlice'

const Pelamar = () => {
    const { application } = useSelector((state) => state.application)
    const { user } = useSelector((state) => state.authUser)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
        await dispatch(getAllApplications())
        await dispatch(getUserById(user.data.id))
    })()
    }, [dispatch])

    const handleAccept = (id) => {
        (async () => {
            await dispatch(updateApplicationStatus({id, application: {status: 'accepted'}}))
        })()
    }

    const handleReject = (id) => {
        (async () => {
            await dispatch(updateApplicationStatus({id, application: {status: 'rejected'}}))
        })()
    }
    
    const card = {
        border: '2px solid rgba(236, 236, 236, 1)',
        borderRadius: '12px',
        width: '22rem',
        padding: '0.8rem',
        display: 'inline-block',
        textAlign: 'left',
        margin: '2rem',
    }

    return (
        <Layout>
            <Container className='text-center my-5'>
                <Row>
                    <Col>
                        <Button href='/lowongan' style={{color: '#4361EE', background: 'none', border: 'none', alignItems: 'center', display: 'flex'}}><MdArrowBackIosNew />  KEMBALI</Button>
                    </Col>
                    <Col>
                        <h1 style={{fontWeight: 'bold'}}>Daftar Pelamar</h1>
                    </Col>
                    <Col></Col>
                </Row>

                {application?.gigs?.map((application, id) => (
                <Card style={card} key={id}>
                    <Card.Body>
                    <Row style={{alignItems:'center'}}>
                        <Col sm={3}>
                            <img src={application?.user?.user_photo} className="mx-auto d-block" style={{width:'60px',height:'60px', borderRadius:'999px', objectFit:'cover', objectPosition:'center'}} alt="profil" />
                        </Col>
                        <Col sm={9}>
                            <Card.Title style={{fontWeight: 'bold'}}>{application.performer_name}</Card.Title>
                            <Card.Subtitle className="mb-2" style={{fontSize: '0.7rem'}}><HiPhone style={{fontSize: "0.8rem"}} /> {application?.user?.user_phone}</Card.Subtitle>
                        </Col>
                    </Row>

                    <Card.Text style={{marginTop: '1rem', textAlign: 'center'}}>
                        <Button href={application.portofolio_link} style={{opacity: '1', border: '2px solid #4361EE', background: 'white', color: '#4361EE', width: '100%'}} >PORTOFOLIO</Button>
                            {application.status === 'accepted' && application.status !== 'rejected' ? (
                                <Row style={{marginTop: '1rem'}}>
                                    <Col sm={6}>
                                        <Button disabled style={{background: '#4361EE', width: '100%'}} >DITERIMA</Button>
                                    </Col>
                                    <Col sm={6}>
                                        <Button disabled style={{width: '100%', background: 'grey'}} >TOLAK</Button>
                                    </Col>
                                </Row>
                            ) : (
                                <Row style={{marginTop: '1rem'}}>
                                    <Col sm={6}>
                                        <Button onClick={() => handleAccept(application?.id)} style={{background: '#4361EE', width: '100%'}} >TERIMA</Button>
                                    </Col>
                                    <Col sm={6}>
                                        <Button onClick={() => handleReject(application?.id) } variant='danger' style={{width: '100%'}} >TOLAK</Button>
                                    </Col>
                                </Row>
                            )}
                    </Card.Text>
                    </Card.Body>
                </Card>
                ))}
            </Container>
        </Layout>
    )
}

export default Pelamar