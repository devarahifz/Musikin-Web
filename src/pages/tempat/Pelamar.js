import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/LayoutTempat'
import { Card, Row, Col, Container, Button, Modal } from 'react-bootstrap'
import { HiPhone } from 'react-icons/hi'
import { MdArrowBackIosNew } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { updateApplicationStatus, getAllApplicationsByGigId } from '../../features/application/ApplicationSlice'
import { useParams } from 'react-router-dom'

const Pelamar = () => {
    const { application } = useSelector((state) => state.application)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        (async () => {
        await dispatch(getAllApplicationsByGigId(id))
    })()
    }, [dispatch])

    const handleAccept = (id) => {
        (async () => {
            await dispatch(updateApplicationStatus({id, application: {status: 'accepted'}}))
            await window.location.reload()
        })()
        // dispatch(getAllApplicationsByGigId(id))
    }

    const handleReject = (id) => {
        (async () => {
            await dispatch(updateApplicationStatus({id, application: {status: 'rejected'}}))
            await window.location.reload()
        })()
        // dispatch(getAllApplicationsByGigId(id))
    }

    const [showAccept, setShowAccept] = useState(false);
    const handleCloseAccept = () => setShowAccept(false);
    const handleShowAccept = () => setShowAccept(true);

    const [showReject, setShowReject] = useState(false);
    const handleCloseReject = () => setShowReject(false);
    const handleShowReject = () => setShowReject(true);
    
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

                {application?.applications?.map((application, id) => (
                <>
                <Card style={card} key={id}>
                    <Card.Body>
                    <Row style={{alignItems:'center'}}>
                        <Col sm={3}>
                            <img src={application?.user?.user_photo} className="mx-auto d-block" style={{width:'60px',height:'60px', borderRadius:'999px', objectFit:'cover', objectPosition:'center'}} alt="profil" />
                        </Col>
                        <Col sm={9}>
                            <a href={`/daftar-pelamar/profile-pelamar/${application?.user_id}`}>
                                <Card.Title style={{fontWeight: 'bold'}}>{application.performer_name}</Card.Title>
                            </a>
                            <Card.Subtitle className="mb-2" style={{fontSize: '0.7rem'}}><HiPhone style={{fontSize: "0.8rem"}} /> {application?.user?.user_phone}</Card.Subtitle>
                        </Col>
                    </Row>

                    <Card.Text style={{marginTop: '1rem', textAlign: 'center'}}>
                        <Button href={application.portofolio_link} style={{opacity: '1', border: '2px solid #4361EE', background: 'white', color: '#4361EE', width: '100%'}} >PORTOFOLIO</Button>
                            {application.status === 'accepted' || application.status === 'rejected' ? (
                                <Row style={{marginTop: '1rem'}}>
                                    <Col sm={6}>
                                        <Button disabled style={{background: application.status === 'accepted' ? '#4361EE' : 'grey', width: '100%'}} >{application.status === 'accepted' ? 'DITERIMA' : 'TERIMA' }</Button>
                                    </Col>
                                    <Col sm={6}>
                                        <Button disabled style={{background: application.status === 'rejected' ? null : 'grey', width: '100%'}} variant={application.status === 'rejected' ? 'danger' : 'danger'} >{application.status === 'rejected' ? 'DITOLAK' : 'TOLAK'}</Button>
                                    </Col>
                                </Row>
                            ) : (
                                <Row style={{marginTop: '1rem'}}>
                                    <Col sm={6}>
                                        <Button onClick={handleShowAccept} style={{background: '#4361EE', width: '100%'}} >TERIMA</Button>
                                    </Col>
                                    <Col sm={6}>
                                        <Button onClick={handleShowReject} variant='danger' style={{width: '100%'}} >TOLAK</Button>
                                    </Col>
                                </Row>
                            )}
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Modal show={showAccept} onHide={handleCloseAccept} backdrop="static" keyboard={false} style={{width: '35%', margin: '0 35%'}} >
                    <Modal.Body className='py-5 text-center'>
                        <div className='mb-3'>
                            <Modal.Title>Anda yakin menerima kandidat <b>{application.performer_name}?</b></Modal.Title>
                        </div>
                        <Button onClick={() => handleAccept(application?.id)} variant="primary" type="submit" className='me-2 py-2' style={{background: '#4361EE', width: '35%'}} >
                            YAKIN
                        </Button>
                        <Button onClick={handleCloseAccept} variant="primary" type="submit" className='ms-2 py-2' style={{background: 'none', border: '2px solid #4361EE', color: '#4361EE', width: '35%'}} >
                            BATAL
                        </Button>
                    </Modal.Body>
                </Modal>

                <Modal show={showReject} onHide={handleCloseReject} backdrop="static" keyboard={false} style={{width: '35%', margin: '0 35%'}} >
                    <Modal.Body className='py-5 text-center'>
                        <div className='mb-3'>
                            <Modal.Title>Anda yakin menolak kandidat <b>{application.performer_name}?</b></Modal.Title>
                        </div>
                        <Button onClick={() => handleReject(application?.id)} variant="danger" type="submit" className='me-2 py-2' style={{width: '35%'}} >
                            YAKIN
                        </Button>
                        <Button onClick={handleCloseReject} variant="primary" type="submit" className='ms-2 py-2' style={{background: 'none', border: '2px solid #4361EE', color: '#4361EE', width: '35%'}} >
                            BATAL
                        </Button>
                    </Modal.Body>
                </Modal>
                </>
                ))}
            </Container>
        </Layout>
    )
}

export default Pelamar