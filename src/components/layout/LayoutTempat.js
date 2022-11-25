import React from 'react'
import Navbar from '../header/NavbarTempat'
import Footer from '../footer/FooterComponent'
import { useSelector } from 'react-redux'

const LayoutTempat = ({children}) => {
    const { owner } = useSelector((state) => state.authOwner)
    
    return (
        <div className=''>
            <Navbar id={owner.data.id} />
                {children}
            <Footer />
        </div>
    )
}

export default LayoutTempat