import React from 'react'
import Navbar from '../header/NavbarTempat'
import Footer from '../footer/FooterComponent'

const LayoutTempat = ({children}) => {
    return (
        <div className=''>
            <Navbar />
                {children}
            <Footer />
        </div>
    )
}

export default LayoutTempat