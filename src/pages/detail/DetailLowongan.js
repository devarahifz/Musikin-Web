import React, { useState, useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaMapMarkerAlt,FaDollarSign } from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux'
import { getGigById } from '../../features/gig/GigSlice';
import { useParams } from 'react-router-dom';
import { Button, Modal, Form } from "react-bootstrap";
import { createApplication, reset } from '../../features/application/ApplicationSlice';
import Layout from '../../components/layout/LayoutMusisi'

const DetailLowongan = () => {
    const { gig } = useSelector((state) => state.gig)
    
    const dispatch = useDispatch()
    const { id } = useParams()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formData, setFormData] = useState({
        gig_id: id,
        user_id: "",
        performer_name: "",
        portofolio_link: "",
        status: "applied",
    })

    const { gig_id, user_id, performer_name, portofolio_link, status } = formData
    const { application, isError, isSuccess, message } = useSelector((state) => state.application)

    useEffect(() => {
        (async () => {
            const data = await dispatch(getGigById(id))
            console.log(data)
        })()
        
        if (isSuccess) {
            return
        }
    }, [application, isSuccess])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const formData = { gig_id, user_id, performer_name, portofolio_link, status }

        dispatch(createApplication(formData))
        // dispatch(reset())
        // window.location.href = '/lowongan'
    }

  return (
    <>
        <Layout>
        <div className='container mx-auto' style={{width: '1080px', marginRight:'180px', marginLeft:'180px' ,marginTop: '64px', marginBottom:'64px'}}>
            <div className='row'>
                <div className='col'>
                    <h5 className="card-title fw-bold mb-2" style={{fontSize:'40px'}}>{gig?.gig?.title}</h5>
                    <p className="card-subtitle"><FaMapMarkerAlt/>{gig?.gig?.location}</p>
                    <p className="card-subtitle mb-2"><FaDollarSign/>Rp {gig?.gig?.fee},00</p>
                </div>
                <a  className='col text-end'>
                    <button className='btn btn-primary text-center mb-4' onClick={handleShow} style={{fontSize:'16px',width:'157px'}}>LAMAR</button>
                </a>
            </div>
            <hr></hr>
            <Swiper
                modules={[Navigation,Pagination,Scrollbar,A11y]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide style={{backgroundColor:"#ECECEC" , width:'323px',height:'180px'}}><img style={{width:'100%',height:'100%'}} src={gig?.gig?.location_photo} alt="" /></SwiperSlide>
                <SwiperSlide style={{backgroundColor:"#ECECEC" , width:'323px',height:'180px'}}>Slide 2</SwiperSlide>
                <SwiperSlide style={{backgroundColor:"#ECECEC" , width:'323px',height:'180px'}}>Slide 3</SwiperSlide>
                <SwiperSlide style={{backgroundColor:"#ECECEC" , width:'323px',height:'180px'}}>Slide 4</SwiperSlide>
            </Swiper>
            <p className='mt-4'>{gig?.gig?.description}</p>
        </div>

        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title style={{fontSize: '20px', textAlign: 'center'}}>Kamu akan melamar ke <b>{gig?.gig?.title}</b> di <b>{gig?.gig?.location}</b></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3"
                    >
                        <Form.Label>Nama</Form.Label>
                        <Form.Control 
                        type='text' 
                        name='performer_name'
                        value={performer_name}
                        onChange={onChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3"
                    >
                        <Form.Label>Tautan Portofolio</Form.Label>
                        <Form.Control 
                        type='text' 
                        name='portofolio_link'
                        value={portofolio_link}
                        onChange={onChange}
                        />
                    </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </Layout>
    </>
  )
}

export default DetailLowongan