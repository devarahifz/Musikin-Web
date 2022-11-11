import React from 'react'
import { Container, Button, Form, InputGroup } from 'react-bootstrap'
import Layout from '../../components/layout/LayoutTempat'

const FormLowongan = () => {
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
            <h1 style={{fontSize: '3rem', fontWeight: 'bold', textAlign: 'center',  margin: '5rem 0 1rem'}}>Buat Lowongan</h1>
            <Form style={Style.form}>
                <Form.Group className="mb-3">
                    <Form.Label>Nama tempat</Form.Label>
                    <Form.Control type="text" style={Style.input} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Lokasi/Alamat</Form.Label>
                    <Form.Control type="text" style={Style.input} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Bayaran</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>Rp</InputGroup.Text>
                        <Form.Control type='number' style={Style.input} />
                        <InputGroup.Text>,00</InputGroup.Text>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control as="textarea" rows={5} style={Style.input} />
                </Form.Group>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Foto Lokasi</Form.Label>
                    <Form.Control type="file" size="lg" multiple style={Style.input} />
                </Form.Group>
                
                <Button type='submit' className='py-3 w-100' style={{background: '#4361EE', fontWeight: '500'}}>BUAT LOWONGAN</Button>
                <Button href='/lowongan' className='py-3 w-100 my-3' style={{background: '#ECECEC', fontWeight: '500', border: 'none', color: '#4361EE'}}>KEMBALI</Button>
            </Form>
            </Container>
        </Layout>
        </>
    )
}

export default FormLowongan