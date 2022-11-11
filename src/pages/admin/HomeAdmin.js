import React , { useState } from 'react'
import logo from '../../assets/images/Musikin Logo Login.png'


const Dashboard = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
      };
  return (
    <>
        <div className='row'>
            <div className='col pt-4' style={{borderRight:"2px solid #BABEC1", maxWidth:"320px", height:"100vh"}}>
                <div className='container'>
                    <div className='row d-flex'>
                        <div className='col'>
                            <img src={logo} alt="logo-musikin"/>
                        </div>
                        <div className='col'>
                            <h3 className='fw-bold'> Dashboard Admin Musikin </h3>
                        </div>
                    </div>
                    <div className='row d-grid mt-5 pt-5'>
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
                    
                </div>
            </div>
            <div className='col pt-4'>
                <div className='container mx-auto'>
                <div className="content-tab">
                    <div className={toggleState === 1 ? "content  active-content" : "content d-none"}>
                    <h1 className='text-center fw-bold'>Daftar Pengguna Musisi</h1>
                    <table className="table table-bordered align-middle text-center" style={{maxWidth:"1040px"}}>
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
                            <tr>
                            <th scope="row">1</th>
                            <td>Muhammad Tulus</td>
                            <td>tulusm@gmail.com</td>
                            <td>08378462465</td>
                            <td><div> <button className='btn btn-primary btn-small'>LINK PROFIL</button> </div></td>
                            <td>
                                <div className='row d-flex mx-5'>
                                    <button className='col me-1 btn btn-warning w-50'>UBAH</button>
                                    <button className='col ms-1 btn btn-danger w-50'>HAPUS</button>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Muhammad Tulus</td>
                            <td>tulusm@gmail.com</td>
                            <td>08378462465</td>
                            <td><button className='btn btn-primary btn-small'>LINK PROFIL</button></td>
                            <td>
                                <div className='row d-flex mx-5'>
                                    <button className='col me-1 btn btn-warning w-50'>UBAH</button>
                                    <button className='col ms-1 btn btn-danger w-50'>HAPUS</button>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Muhammad Tulus</td>
                            <td>tulusm@gmail.com</td>
                            <td>08378462465</td>
                            <td><button className='btn btn-primary btn-small'>LINK PROFIL</button></td>
                            <td>
                                <div className='row d-flex mx-5'>
                                    <button className='col me-1 btn btn-warning w-50'>UBAH</button>
                                    <button className='col ms-1 btn btn-danger w-50'>HAPUS</button>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className={toggleState === 2 ? "content  active-content" : "content d-none"}>
                    <h1 className='text-center fw-bold'>Daftar Pengguna Pemilik Tempat</h1>
                    <table className="table table-bordered align-middle text-center" style={{maxWidth:"1040px"}}>
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
                            <tr>
                            <th scope="row">1</th>
                            <td>Muhammad Tulus</td>
                            <td>tulusm@gmail.com</td>
                            {/* <td>08378462465</td>
                            <td><div> <button className='btn btn-primary btn-small'>LINK PROFIL</button> </div></td> */}
                            <td>
                                <div className='row d-flex mx-5'>
                                    <button className='col me-1 btn btn-warning w-50'>UBAH</button>
                                    <button className='col ms-1 btn btn-danger w-50'>HAPUS</button>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Muhammad Tulus</td>
                            <td>tulusm@gmail.com</td>
                            {/* <td>08378462465</td>
                            <td><button className='btn btn-primary btn-small'>LINK PROFIL</button></td> */}
                            <td>
                                <div className='row d-flex mx-5'>
                                    <button className='col me-1 btn btn-warning w-50'>UBAH</button>
                                    <button className='col ms-1 btn btn-danger w-50'>HAPUS</button>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Muhammad Tulus</td>
                            <td>tulusm@gmail.com</td>
                            {/* <td>08378462465</td>
                            <td><button className='btn btn-primary btn-small'>LINK PROFIL</button></td> */}
                            <td>
                                <div className='row d-flex mx-5'>
                                    <button className='col me-1 btn btn-warning w-50'>UBAH</button>
                                    <button className='col ms-1 btn btn-danger w-50'>HAPUS</button>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className={toggleState === 3 ? "content  active-content" : "content d-none"}>
                    <h1 className='text-center fw-bold'>Daftar Pengguna Pemilik Lowongan</h1>
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
                            <tr>
                            <th scope="row">1</th>
                            <td>Elon Musk</td>
                            <td>Starbucks</td>
                            <td>Mall Kelapa Gading, Jakarta Timur</td>
                            <td>Rp.500.000</td>
                            <td className='text-start'>Penampilan pada jam 14.00 - 15.00 WIB tanggal 26 Desember 2022. Maksimal personil 7 orang. Lokasi di bagian kiri lantai 2 sebelah bread.co. Mendapatkan konsumsi (bisa request). Genre yang dimainkan jazz pop.</td>
                            <td><div> <button className='btn btn-primary btn-small'>LINK FOTO</button> </div></td>
                            <td>
                                <div className='row d-flex mx-2'>
                                    <button className='col me-1 btn btn-warning w-50'>UBAH</button>
                                    <button className='col ms-1 btn btn-danger w-50'>HAPUS</button>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard;