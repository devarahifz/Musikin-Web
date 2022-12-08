import React, { useEffect, useState } from 'react'
import { Container, Button, Form, InputGroup, Modal } from 'react-bootstrap'
import Layout from '../../components/layout/LayoutTempat'
import { useDispatch, useSelector } from 'react-redux'
import { updateGig, reset, getGigById } from '../../features/gig/GigSlice'
import { useParams } from 'react-router-dom'

const FormLowongan = () => {
    const { gig } = useSelector((state) => state.gig)
    const [imagePreview, setImagePreview] = useState(null)

    const [formData, setFormData] = useState({
        title: "",
        location: "",
        fee: "",
        description: "",
        location_photo: "",
    })

    const dispatch = useDispatch()
    const { id } = useParams()
    
    useEffect(() => {
        (async () => {
            const data = await dispatch(getGigById(id))
            
            setFormData({
                title: data.payload.gig.title,
                location: data.payload.gig.location,
                fee: data.payload.gig.fee,
                description: data.payload.gig.description,
            })
        })()
    }, [])

    const onSubmit = (e) => {
        (async () => {
        e.preventDefault()

        const form = new FormData();
        form.append("location_photo", formData.location_photo);
        form.append("title", formData.title);
        form.append("location", formData.location);
        form.append("fee", formData.fee);
        form.append("description", formData.description);

        await dispatch(updateGig({id, gig: form}))

        dispatch(reset())
        window.location.href = '/lowongan'
        })()
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
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

    const [showAlert, setShowAlert] = useState(false);
    const handleCloseAlert = () => setShowAlert(false);
    const handleShowAlert = () => setShowAlert(true);

    const Style = {
        input : {
            border: "2px solid #ECECEC"
        },
        form : {
            width: "50%",
            margin: "2rem auto"
        }
    }

    return (
        <>
        <Layout>
            <Container className='my-5'>
            <h1 style={{fontSize: '3rem', fontWeight: 'bold', textAlign: 'center',  margin: '5rem 0 1rem'}}>Edit Lowongan</h1>

            <Form onSubmit={onSubmit} style={Style.form}>
                <Form.Group className="mb-3">
                    <Form.Label>Nama tempat</Form.Label>
                    <Form.Control 
                    type="text" 
                    name='title'
                    value={formData.title}
                    onChange={onChange}
                    style={Style.input} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Lokasi/Alamat</Form.Label>
                    <Form.Control 
                    type="text" 
                    name='location'
                    value={formData.location}
                    onChange={onChange}
                    style={Style.input} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Bayaran</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>Rp</InputGroup.Text>
                        <Form.Control 
                        type='number' 
                        name='fee'
                        value={formData.fee}
                        onChange={onChange}
                        style={Style.input} />
                        <InputGroup.Text>,00</InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control 
                    rows={5} 
                    as="textarea" 
                    name='description'
                    value={formData.description}
                    onChange={onChange}
                    style={Style.input} />
                </Form.Group>

                {/* Image */}
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label className='d-block'>Foto Lokasi</Form.Label>
                    {imagePreview ? <img src={imagePreview} alt="preview" className='w-50 mb-3' /> : <img src={gig?.gig?.location_photo} alt="preview" className='w-50 mb-3' />}
                    <Form.Control 
                    type="file"
                    size="lg" 
                    multiple
                    name='location_photo'
                    onChange={handleChange} 
                    style={Style.input} />
                </Form.Group>
                
                <Button type='submit' className='py-3 w-100' style={{background: '#4361EE', fontWeight: '500'}}>EDIT LOWONGAN</Button>
                <Button onClick={handleShowAlert} className='py-3 w-100 my-3' style={{background: '#ECECEC', fontWeight: '500', border: 'none', color: '#4361EE'}}>KEMBALI</Button>
            </Form>

            </Container>

            <Modal show={showAlert} onHide={handleCloseAlert} backdrop="static" keyboard={false} style={{width: '20%', margin: '0 40%'}} centered>
                <Modal.Body className='py-5 text-center'>
                    <div className='mb-3'>
                        <Modal.Title>Data belum disimpan !</Modal.Title>
                    </div>
                    <Button onClick={handleCloseAlert} variant="primary" type="submit" className='me-2' style={{background: '#4361EE', width: '30%'}} >
                        UBAH
                    </Button>
                    <Button href={`/lowongan`} variant="primary" type="submit" className='ms-2' style={{background: 'none', border: '2px solid #4361EE', color: '#4361EE', width: '30%'}} >
                        BATAL
                    </Button>
                </Modal.Body>
            </Modal>
        </Layout>
        </>
    )
}

export default FormLowongan