import React , { useEffect, useState } from 'react'
import logo from '../../assets/images/Musikin Logo Login.png'
import { logout, reset } from "../../features/admin/AuthSlice";
import { getAllUsers, 
        getAllOwners, 
        getAllGigs,
        getUserById,
        getOwnerById,
        getGigById,
        updateUser,
        updateOwner,
        updateGig,
        deleteUser,
        deleteOwner,
        deleteGig
        } from '../../features/admin/AdminSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form, Button } from 'react-bootstrap';

const Dashboard = () => {
    const [toggleState, setToggleState] = useState(1);
    const [showUser, setShowUser] = useState(false);
    const [showOwner, setShowOwner] = useState(false);
    const [showGig, setShowGig] = useState(false);
    const [userData, setUserData] = useState({
        id: "",
        user_name: "",
        user_email: "",
        user_phone: "",
    })
    const [ownerData, setOwnerData] = useState({
        id: "",
        owner_name: "",
        owner_email: "",
    })
    const [gigData, setGigData] = useState({
        id: "",
        title: "",
        location: "",
        fee: "",
        description: "",
    })
    const { admin } = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    const toggleTab = (index) => {
        setToggleState(index);
    };

    useEffect(() => {
        if (toggleState === 1) {
            dispatch(getAllUsers());
        } else if (toggleState === 2) {
            dispatch(getAllOwners());
        } else if (toggleState === 3) {
            dispatch(getAllGigs());
        }
    }, [dispatch, toggleState]);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        window.location.href = "/admin";
    };

    const handleDelete = async (id) => {
        if (toggleState === 1) {
            await dispatch(deleteUser(id));
            await dispatch(getAllUsers());
        } else if (toggleState === 2) {
            await dispatch(deleteOwner(id));
            dispatch(getAllOwners());
        } else if (toggleState === 3) {
            await dispatch(deleteGig(id));
            dispatch(getAllGigs());
        }
    }

    const handleShowUser = (id) => {
        setShowUser(true)
        const data = dispatch(getUserById(id))
        data.then((res) => {
            console.log(res.payload)
            setUserData({
                id: res?.payload?.user?.id,
                user_name: res?.payload?.user?.user_name,
                user_email: res?.payload?.user?.user_email,
                user_phone: res?.payload?.user?.user_phone,
            })
        })
    }
    const handleCloseUser = () => {
        setShowUser(false)
        dispatch(getAllUsers())
    }

    const handleShowOwner = (id) => {
        setShowOwner(true)
        const data = dispatch(getOwnerById(id))
        data.then((res) => {
            console.log(res.payload)
            setOwnerData({
                id: res?.payload?.owner?.id,
                owner_name: res?.payload?.owner?.owner_name,
                owner_email: res?.payload?.owner?.owner_email,
            })
        })
    }
    const handleCloseOwner = () => {
        setShowOwner(false)
        dispatch(getAllOwners())
    }

    const handleShowGig = (id) => {
        setShowGig(true)
        const data = dispatch(getGigById(id))
        data.then((res) => {
            console.log(res.payload)
            setGigData({
                id: res?.payload?.gig?.id,
                title: res?.payload?.gig?.title,
                location: res?.payload?.gig?.location,
                fee: res?.payload?.gig?.fee,
                description: res?.payload?.gig?.description,
            })
        })
    }
    const handleCloseGig = () => {
        setShowGig(false)
        dispatch(getAllGigs())
    }

    const onSubmitUser = (e) => {
        (async () => {
            e.preventDefault()
            const id = userData.id

            const form = new FormData()
            form.append("user_name", userData.user_name)
            form.append("user_email", userData.user_email)
            form.append("user_phone", userData.user_phone)
            
            await dispatch(updateUser({id, user: form}))
            dispatch(reset())

            handleCloseUser()
        })()
    }

    const onSubmitOwner = (e) => {
        (async () => {
            e.preventDefault()
            const id = ownerData.id

            const form = new FormData()
            form.append("owner_name", ownerData.owner_name)
            form.append("owner_email", ownerData.owner_email)

            await dispatch(updateOwner({id, owner: form}))
            dispatch(reset())

            handleCloseOwner()
        })()
    }

    const onSubmitGig = (e) => {
        (async () => {
            e.preventDefault()
            const id = gigData.id

            const form = new FormData()
            form.append("title", gigData.title)
            form.append("location", gigData.location)
            form.append("fee", gigData.fee)
            form.append("description", gigData.description)

            await dispatch(updateGig({id, gig: form}))
            dispatch(reset())

            handleCloseGig()
        })()
    }

    const onChangeUser = (e) => {
        setUserData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onChangeOwner = (e) => {
        setOwnerData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onChangeGig = (e) => {
        setGigData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

  return (
    <>
        <div className='row'>
            <div className='col pt-4' style={{maxWidth:"320px", height:"100vh"}}>
                <div className='container'>
                    <div className='row d-flex'>
                        <div className='col'>
                            <img src={logo} alt="logo-musikin"/>
                        </div>
                        <div className='col'>
                            <h3 className='fw-bold'> Dashboard Admin Musikin </h3>
                        </div>
                    </div>
                    <div className='row d-grid my-5 pt-5'>
                        <div className='col '>
                            <button
                            className={`${toggleState === 1 ? "tabs active-tabs text-primary" : "tabs text-dark"} btn btn mb-3`}
                            onClick={() => toggleTab(1)}>Pengguna Musisi</button>
                        </div>
                        <div className='col'>
                        <button
                            className={`${toggleState === 2 ? "tabs active-tabs text-primary" : "tabs text-dark"} btn btn mb-3`}
                            onClick={() => toggleTab(2)}>Pengguna Pemilik Tempat</button>
                        </div>
                        <div className='col'>
                        <button
                            className={`${toggleState === 3 ? "tabs active-tabs text-primary" : "tabs text-dark"} btn btn mb-3`}
                            onClick={() => toggleTab(3)}>Lowongan</button>
                        </div>
                    </div>
                    <button onClick={onLogout} className='btn btn-danger mt-5 ms-2'>Keluar</button>
                </div>
            </div>
            <div className='col pt-4' style={{borderLeft:"2px solid #BABEC1"}}>
                <div className='container mx-auto'>
                <div className="content-tab">
                    <div className={toggleState === 1 ? "content  active-content" : "content d-none"}>
                    <h1 className='text-center fw-bold'>Daftar Pengguna Musisi</h1>
                    <table className="table table-bordered align-middle text-center mx-auto" style={{maxWidth:"1040px"}}>
                        <thead>
                            <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Email</th>
                            <th scope="col">Nomor Handphone</th>
                            <th scope="col">Foto Profil</th>
                            <th scope="col">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admin?.users?.rows?.map((user, index) => (
                                <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{user.user_name}</td>
                                <td>{user.user_email}</td>
                                <td>{user.user_phone}</td>
                                <td><a href={user.user_photo}> <button className='btn btn-primary btn-small'>LINK FOTO</button> </a></td>
                                <td>
                                    <div className='row d-flex mx-5'>
                                        <button onClick={() => handleShowUser(user.id)} className='col me-1 btn btn-warning w-50'>UBAH</button>
                                        <button onClick={() => handleDelete(user.id)} className='col ms-1 btn btn-danger w-50'>HAPUS</button>
                                    </div>
                                </td>
                                </tr>
                            ))}

                            
                        </tbody>
                    </table>
                    </div>
                    <div className={toggleState === 2 ? "content  active-content" : "content d-none"}>
                    <h1 className='text-center fw-bold'>Daftar Pengguna Pemilik Tempat</h1>
                    <table className="table table-bordered align-middle text-center mx-auto" style={{maxWidth:"1040px"}}>
                        <thead>
                            <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Email</th>
                            {/* <th scope="col">Nomor Handphone</th>
                            <th scope="col">Foto Profil</th> */}
                            <th scope="col">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admin?.owners?.rows?.map((owner, index) => (
                                <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{owner.owner_name}</td>
                                <td>{owner.owner_email}</td>
                                {/* <td>08378462465</td>
                                <td><div> <button className='btn btn-primary btn-small'>LINK PROFIL</button> </div></td> */}
                                <td>
                                    <div className='row d-flex mx-5'>
                                        <button onClick={() => handleShowOwner(owner.id)} className='col me-1 btn btn-warning w-50'>UBAH</button>
                                        <button onClick={() => handleDelete(owner.id)} className='col ms-1 btn btn-danger w-50'>HAPUS</button>
                                    </div>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                    <div className={toggleState === 3 ? "content  active-content" : "content d-none"}>
                    <h1 className='text-center fw-bold'>Daftar Lowongan</h1>
                    <table className="table table-bordered w-100 text-center align-middle">
                        <thead>
                            <tr>
                            <th scope="col">No.</th>
                            <th scope="col"style={{width:"150px"}}>Pemilik Tempat</th>
                            <th scope="col">Nama</th>
                            <th scope="col px-auto"style={{width:"150px"}}>Lokasi</th>
                            <th scope="col">Bayaran</th>
                            <th scope="col" style={{width:"300px"}}>Deskripsi</th>
                            <th scope="col" style={{width:"128px"}}>Foto Lokasi</th>
                            <th scope="col" style={{width:"200px"}}>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admin?.gigs?.map((gig, index) => (
                                <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{gig.owner.owner_name}</td>
                                <td>{gig.title}</td>
                                <td>{gig.location}</td>
                                <td>Rp {gig.fee},00</td>
                                <td className='text-start text-break'>{gig.description}</td>
                                <td><a href={gig.location_photo}> <button className='btn btn-primary btn-small'>LINK FOTO</button> </a></td>
                                <td>
                                    <div className='row d-flex mx-2'>
                                        <button onClick={() => handleShowGig(gig.id)} className='col me-1 btn btn-warning w-50'>UBAH</button>
                                        <button onClick={() => handleDelete(gig.id)} className='col ms-1 btn btn-danger w-50'>HAPUS</button>
                                    </div>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>

                </div>
            </div>
        </div>
        
        {/* Modal User */}
        <Modal show={showUser} onHide={handleCloseUser} centered>
            <Modal.Body className='p-5'>
                <div style={{textAlign: 'center'}}>
                    <Modal.Title style={{fontSize: '20px', textAlign: 'center'}}>Edit User <b>{admin?.user?.user_name}</b></Modal.Title>
                </div>
                <Form onSubmit={onSubmitUser}>
                    <Form.Group className="mb-3 mt-5"
                    >
                        <Form.Label>Nama</Form.Label>
                        <Form.Control 
                        type='text' 
                        name='user_name'
                        value={userData.user_name}
                        onChange={onChangeUser}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3"
                    >
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type='email' 
                        name='user_email'
                        value={userData.user_email}
                        onChange={onChangeUser}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3"
                    >
                        <Form.Label>Nomor Handphone</Form.Label>
                        <Form.Control 
                        type='number' 
                        name='user_phone'
                        value={userData.user_phone}
                        onChange={onChangeUser}
                        />
                    </Form.Group>
                    <div className='text-center mt-5'>
                        <Button variant="primary" type="submit" className='w-100' style={{background: '#4361EE'}} >
                            SIMPAN
                        </Button>
                    </div>
                </Form>
                <div className='text-center mt-2'>
                    <Button onClick={handleCloseUser} className='w-100 btn-light' style={{background: '#ECECEC', color: '#4361EE'}}>
                        BATAL
                    </Button>
                </div>
            </Modal.Body>
        </Modal>

        {/* Modal Owner */}
        <Modal show={showOwner} onHide={handleCloseOwner} centered>
            <Modal.Body className='p-5'>
                <div style={{textAlign: 'center'}}>
                    <Modal.Title style={{fontSize: '20px', textAlign: 'center'}}>Edit Owner <b>{admin?.owner?.owner_name}</b></Modal.Title>
                </div>
                <Form onSubmit={onSubmitOwner}>
                    <Form.Group className="mb-3 mt-5"
                    >
                        <Form.Label>Nama</Form.Label>
                        <Form.Control 
                        type='text' 
                        name='owner_name'
                        value={ownerData.owner_name}
                        onChange={onChangeOwner}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3"
                    >
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        type='email' 
                        name='owner_email'
                        value={ownerData.owner_email}
                        onChange={onChangeOwner}
                        />
                    </Form.Group>
                    <div className='text-center mt-5'>
                        <Button variant="primary" type="submit" className='w-100' style={{background: '#4361EE'}} >
                            SIMPAN
                        </Button>
                    </div>
                </Form>
                <div className='text-center mt-2'>
                    <Button onClick={handleCloseOwner} className='w-100 btn-light' style={{background: '#ECECEC', color: '#4361EE'}}>
                        BATAL
                    </Button>
                </div>
            </Modal.Body>
        </Modal>

        {/* Modal Gig */}
        <Modal show={showGig} onHide={handleCloseGig} centered>
            <Modal.Body className='p-5'>
                <div style={{textAlign: 'center'}}>
                    <Modal.Title style={{fontSize: '20px', textAlign: 'center'}}>Edit Lowongan <b>{admin?.gig?.title}</b></Modal.Title>
                </div>
                <Form onSubmit={onSubmitGig}>
                    <Form.Group className="mb-3 mt-5"
                    >
                        <Form.Label>Nama</Form.Label>
                        <Form.Control 
                        type='text' 
                        name='title'
                        value={gigData.title}
                        onChange={onChangeGig}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3"
                    >
                        <Form.Label>Lokasi</Form.Label>
                        <Form.Control 
                        type='text' 
                        name='location'
                        value={gigData.location}
                        onChange={onChangeGig}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3"
                    >
                        <Form.Label>Bayaran</Form.Label>
                        <Form.Control 
                        type='number' 
                        name='fee'
                        value={gigData.fee}
                        onChange={onChangeGig}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3"
                    >
                        <Form.Label>Deskripsi</Form.Label>
                        <Form.Control 
                        as='textarea' 
                        name='description'
                        value={gigData.description}
                        onChange={onChangeGig}
                        />
                    </Form.Group>
                    <div className='text-center mt-5'>
                        <Button variant="primary" type="submit" className='w-100' style={{background: '#4361EE'}} >
                            SIMPAN
                        </Button>
                    </div>
                </Form>
                <div className='text-center mt-2'>
                    <Button onClick={handleCloseGig} className='w-100 btn-light' style={{background: '#ECECEC', color: '#4361EE'}}>
                        BATAL
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default Dashboard;