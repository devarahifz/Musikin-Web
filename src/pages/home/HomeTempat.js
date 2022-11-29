import React, { useEffect } from 'react'
import Layout from '../../components/layout/LayoutTempat'
import { Container, Card, Dropdown, Row, Col, DropdownButton, Button } from 'react-bootstrap'
import { BiDollar } from 'react-icons/bi'
import { BsThreeDotsVertical, BsPlusLg } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGigs, getAllGigsByOwnerId, deleteGig } from '../../features/gig/GigSlice'

const HomeTempat = () => {
  const { gig } = useSelector((state) => state.gig)
  const dispatch = useDispatch()
  
  useEffect(() => {
    (async () => {
    await dispatch(getAllGigsByOwnerId())

    document.querySelectorAll('.dropdown-toggle').forEach((card) => {
      card.style.background = 'none'
      card.style.padding = '0'
      card.style.border = 'none'
    })
  })()

  dispatch(getAllGigsByOwnerId())
  }, [dispatch])

  const handleDelete = async (id) => {
    await dispatch(deleteGig(id))
    window.location.reload()
    await dispatch(getAllGigs())
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
  const button = {
    background: 'none',
    border: '2px solid rgba(236, 236, 236, 1)',
    borderRadius: '12px',
    width: '22rem',
    padding: '2rem',
    color: '#BABEC1',
    fontSize: '0.7rem',
    fontWeight: '700',
  }

  return (
    <>
      <Layout>
        <Container className='text-center my-5'>
          <h1 style={{fontSize: '3rem', fontWeight: 'bold', margin: '5rem 0 1rem'}}>Lowonganmu</h1>

          {/* card 1 */}
          {gig?.gig?.map((gig, id) => (
            <Card style={card} key={id}>
            <Card.Body>
              <Row>
                <Col>
                <a href='/daftar-pelamar' style={{color: 'black', textDecoration: 'none'}}>
                  <Card.Title style={{fontWeight: 'bold'}}>{gig.title}</Card.Title>
                </a>
                </Col>
                <Col className='text-end'>
                  <DropdownButton 
                    key='end'
                    id='dropdown-button-drop-end'
                    drop='end' 
                    title={<BsThreeDotsVertical style={{color: 'grey'}} />}
                    >
                    <Dropdown.Item href={`/lowongan/edit-lowongan/${gig.id}`}>
                        Ubah
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleDelete(gig.id)}>Hapus</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>

              <Card.Subtitle className="mb-2" style={{fontSize: '0.7rem'}}><HiLocationMarker style={{fontSize: "0.8rem"}} /> {gig.location}</Card.Subtitle>
              <Card.Subtitle className="mb-2" style={{fontSize: '0.7rem'}}><BiDollar style={{fontSize: "0.8rem"}} /> {gig.fee}</Card.Subtitle>
              <Card.Text style={{fontSize: '0.7rem', marginTop: '1rem'}}>
                {gig.description}
              </Card.Text>
            </Card.Body>
          </Card>
          ))}

          <Button style={button} href='/lowongan/buat-lowongan'>
            <BsPlusLg className='opacity-75' style={{display: 'block', margin: '0 auto', fontSize: '3.5rem', marginBottom: '1.5rem'}} />
            <p className='m-0 opacity-75'>Tambah Lowongan</p>
          </Button>
          
        </Container>
      </Layout>
    </>
  )
}

export default HomeTempat