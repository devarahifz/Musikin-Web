import React from 'react'
import NavbarMusisi from '../../components/header/NavbarMusisi'
import Footer from '../../components/footer/FooterComponent'
import tulus from '../../assets/images/profil-tulus.jpg'
const EditProfileMusisi = () => {
  return (
    <div>
        <NavbarMusisi/>
        <div className='container-profile-musisi mx-auto' style={{maxWidth:'640px', marginRight: '400px',marginLeft:'400px', marginTop:'64px' , marginBottom:'64px'}}>
            <h1 className='text-center fw-bold mb-5 pb-3'>Edit Profil</h1>
            <p> Foto Profil </p>
            <div className='row mx-auto'>
              <div className='col-12 col-md-4'>
              <img src={tulus} className="mb-3" style={{width:'200px',height:'200px', borderRadius:'999px'}} alt='tulus'></img>
              </div>
              <div className='col mt-5'>
                <button className='btn btn-light fw-semibold mb-2' style={{border: '2px solid #4361EE' , color: '#4361EE'}}>Pilih Foto</button>
                <p className='text-muted pt-2 ps-2' style={{fontSize:'16px'}}>Ukuran foto maksimal 5mb</p>
              </div>
            </div>
            <p className='m-0'>Nama</p>
            <input className='w-100  p-2 mb-3' type="form-control" style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px', height:'48px'}} value="Muhammad Tulus"/>
            <p className='m-0'>Email</p>
            <input className='w-100  p-2 mb-3' type="form-control" style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px', height:'48px'}} value="tulusm@gmail.com"/>
            <p className='m-0'>Password</p>
            <input className='w-100  p-2 mb-3 form-control' type="password" style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px', height:'48px'}} value="Muhammad Tulus"/>
            <p className='m-0'>Nomor Handphone</p>
            <input className='w-100  p-2 mb-3' type="form-control" style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px', height:'48px'}} value="0867523762132"/>
            <p className='m-0'>Tentang</p>
            <textarea className='w-100  p-2 mb-3' rows="4" style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px'}} value="Lorem Ipsum"/>
            <button className='btn btn-primary w-100 mb-1'>SIMPAN</button>
            <button className='btn btn-light w-100' style={{backgroundColor: '#ECECEC', color: '#4361EE'}}>Kembali</button>
        </div>
        <Footer/>
    </div>
  )
}

export default EditProfileMusisi