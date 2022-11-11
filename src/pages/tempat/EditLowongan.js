import React, { useEffect, useState } from 'react'
import { Container, Button, Form, InputGroup } from 'react-bootstrap'
import Layout from '../../components/layout/LayoutTempat'
import { useDispatch, useSelector } from 'react-redux'
import { updateGig, reset, getGigById } from '../../features/gig/GigSlice'
import { useParams } from 'react-router-dom'

const FormLowongan = () => {
    const { gig } = useSelector((state) => state.gig)

    const [formData, setFormData] = useState({
        title: "",
        location: "",
        fee: "",
        description: "",
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
        e.preventDefault()

        dispatch(updateGig({id, gig: formData}))
        dispatch(reset())
        window.location.href = '/lowongan'
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

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
                {/* <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Foto Lokasi</Form.Label>
                    <Form.Control type="file" size="lg" multiple style={Style.input} />
                </Form.Group> */}
                
                <Button type='submit' className='py-3 w-100' style={{background: '#4361EE', fontWeight: '500'}}>BUAT LOWONGAN</Button>
                <Button href='/lowongan' className='py-3 w-100 my-3' style={{background: '#ECECEC', fontWeight: '500', border: 'none', color: '#4361EE'}}>KEMBALI</Button>
            </Form>

            </Container>
        </Layout>
        </>
    )
}

export default FormLowongan