import React from 'react'
import Layout from '../../components/layout/LayoutTempat'
import { Container, Form, Button } from 'react-bootstrap'

const ProfileTempat = () => {
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
            <Container className="my-5">
            <h1 style={{fontSize: '3rem', fontWeight: 'bold', textAlign: 'center',  margin: '5rem 0 1rem'}}>Edit Profile</h1>
            <Form style={Style.form}>
                    <Form.Group className="mb-3 text-start">
                        <Form.Label>Nama</Form.Label>
                        <Form.Control type="text" style={Style.input} />
                    </Form.Group>
                    <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" style={Style.input} />
                    </Form.Group>
                    <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" style={Style.input} />
                    </Form.Group>
                    <Button type='submit' className='py-3 my-3 w-100' style={{background: '#4361EE', fontWeight: '500'}}>KEMBALI</Button>
                    <Button className='py-3 w-100' style={{background: '#ECECEC', fontWeight: '500', border: 'none', color: '#4361EE'}}>KEMBALI</Button>
                </Form>
            </Container>
        </Layout>
        </>
    )
}

export default ProfileTempat