import React from 'react'
import NavbarMusisi from '../../components/header/NavbarMusisi'
import Footer from '../../components/footer/FooterComponent'

const Lamar = () => {
  return (
    <div>
        <NavbarMusisi/>
        <div className='container mx-auto py-4 px-5' style={{width:'520px',height:'609px', marginLeft:'460px',marginRight:'460px',marginTop:'64px',marginBottom:'64px',border:'2px solid #ECECEC',borderRadius:'12px'}}>
            <p className='text-center mx-4 px-5 mb-5'>Kamu akan melamar ke <b>Starbucks</b> di <b>Mall Kelapa Gading, Jakarta Timur</b></p>
            <p className='m-0'>Nama</p>
            <input className='w-100  p-2 mb-4' type="form-control" style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px', height:'48px'}} />
            <p className='m-0'>Email</p>
            <input className='w-100  p-2 mb-4' type="form-control" style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px', height:'48px'}} />
            <p className='m-0'>Tautan Portofolio</p>
            <input className='w-100  p-2 mb-5 form-control' type="link" style={{border:'2px solid #ECECEC', borderRadius:'8px', maxWidth:'640px', height:'48px'}} />
            <button className='btn btn-primary w-100 mb-3' style={{height:'48px'}}>LAMAR</button>
            <a href="/detail"><button className='btn btn-light w-100' style={{height:'48px', backgroundColor: '#ECECEC', color: '#4361EE'}}>BATAL</button></a>
        </div>
        <Footer/>
    </div>
  )
}

export default Lamar