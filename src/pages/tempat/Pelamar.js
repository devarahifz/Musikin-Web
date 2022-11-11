import React from 'react'
import Layout from '../../components/layout/LayoutTempat'
import { Card, Row, Col, Container, Button } from 'react-bootstrap'
import { HiLocationMarker, HiPhone } from 'react-icons/hi'
import { MdArrowBackIosNew } from 'react-icons/md'
import List from './ListPelamar'

const Pelamar = () => {
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

                {List.map((item, index) => (
                <Card style={card} key={index}>
                    <Card.Body>
                    <Row>
                        <Col sm={3}>
                            <img src={item.image} alt="profil" />
                        </Col>
                        <Col sm={9}>
                            <Card.Title style={{fontWeight: 'bold'}}>{item.name}</Card.Title>
                            <Card.Subtitle className="mb-2" style={{fontSize: '0.7rem'}}><HiLocationMarker style={{fontSize: "0.8rem"}} /> {item.location}</Card.Subtitle>
                            <Card.Subtitle className="mb-2" style={{fontSize: '0.7rem'}}><HiPhone style={{fontSize: "0.8rem"}} /> {item.phone}</Card.Subtitle>
                        </Col>
                    </Row>

                    <Card.Text style={{marginTop: '1rem', textAlign: 'center'}}>
                        <Button style={{opacity: '1', border: '2px solid #4361EE', background: 'white', color: '#4361EE', width: '100%'}} disabled>PORTOFOLIO</Button>
                        <Row style={{marginTop: '1rem'}}>
                            <Col sm={6}>
                        <Button style={{background: '#4361EE', width: '100%'}}>TERIMA</Button>
                                </Col>
                            <Col sm={6}>
                        <Button variant='danger' style={{width: '100%'}}>TOLAK</Button>
                                </Col>
                        </Row>
                    </Card.Text>
                    </Card.Body>
                </Card>
                ))}
            </Container>
        </Layout>
    )
}

export default Pelamar