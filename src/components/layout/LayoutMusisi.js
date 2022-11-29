import React from 'react'
import Navbar from '../header/NavbarMusisi'
import Footer from '../footer/FooterComponent'
import { useSelector } from 'react-redux'

const LayoutTempat = ({children}) => {
    const { user } = useSelector((state) => state.authUser)
    
    return (
        <div className=''>
            <Navbar id={user?.data?.id || user?.user?.id} />
                {children}
            <Footer />
        </div>
    )
}

export default LayoutTempat