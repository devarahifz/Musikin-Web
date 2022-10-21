import React from 'react'
import NavbarLanding from '../../components/header/NavbarLanding'
import Footer from '../../components/footer/FooterComponent'

const LandingPage = () => {
  return (
    <>
    <NavbarLanding />
      <div style={{height: '10vh'}}>LandingPage</div>
    <Footer />
    </>
  )
}

export default LandingPage