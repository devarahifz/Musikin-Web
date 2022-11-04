import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaMapMarkerAlt,FaDollarSign } from "react-icons/fa"
import NavbarMusisi from '../../components/header/NavbarMusisi'
import Footer from '../../components/footer/FooterComponent'
const DetailLowongan = () => {
  return (
    <>
        <NavbarMusisi/>
        <div className='container mx-auto' style={{width: '1080px', marginRight:'180px', marginLeft:'180px' ,marginTop: '64px', marginBottom:'64px'}}>
            <div className='row'>
                <div className='col'>
                    <h5 className="card-title fw-bold mb-2" style={{fontSize:'40px'}}>Starbucks</h5>
                    <p className="card-subtitle"><FaMapMarkerAlt/>Mall Kelapa Gading,Jakarta Timur</p>
                    <p className="card-subtitle mb-2"><FaDollarSign/>Rp 500.000,00</p>
                </div>
                <a href='/detail/lamar' className='col text-end'>
                    <button className='btn btn-primary text-center mb-4' style={{fontSize:'16px',width:'157px'}}>LAMAR</button>
                </a>
            </div>
            <hr></hr>
            <Swiper
                modules={[Navigation,Pagination,Scrollbar,A11y]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide style={{backgroundColor:"#ECECEC" , width:'323px',height:'180px'}}>Slide 1</SwiperSlide>
                <SwiperSlide style={{backgroundColor:"#ECECEC" , width:'323px',height:'180px'}}>Slide 2</SwiperSlide>
                <SwiperSlide style={{backgroundColor:"#ECECEC" , width:'323px',height:'180px'}}>Slide 3</SwiperSlide>
                <SwiperSlide style={{backgroundColor:"#ECECEC" , width:'323px',height:'180px'}}>Slide 4</SwiperSlide>
            </Swiper>
            <p className='mt-4'> Penampilan pada jam 14.00 - 15.00 WIB. Maksimal personil 7 orang. Lokasi di bagian kiri lantai 2 sebelah bread.co. Mendapatkan konsumsi (bisa request). Genre yang dimainkan yaitu jazz pop.
            <br></br> <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper auctor neque vitae tempus quam pellentesque. Sapien nec sagittis aliquam malesuada bibendum arcu. Scelerisque fermentum dui faucibus in ornare. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Convallis aenean et tortor at. Felis eget velit aliquet sagittis id consectetur. Metus aliquam eleifend mi in nulla. Quis commodo odio aenean sed. Ultricies lacus sed turpis tincidunt. Adipiscing vitae proin sagittis nisl rhoncus. Interdum velit laoreet id donec ultrices.
            <br></br> <br></br>
            Augue neque gravida in fermentum et. Faucibus pulvinar elementum integer enim neque volutpat ac. Id venenatis a condimentum vitae sapien. Et pharetra pharetra massa massa ultricies mi quis. Interdum posuere lorem ipsum dolor sit. Auctor augue mauris augue neque gravida. Enim ut tellus elementum sagittis vitae et leo duis. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Elementum sagittis vitae et leo duis ut diam quam. Risus feugiat in ante metus dictum at. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Diam vel quam elementum pulvinar etiam non. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Arcu cursus vitae congue mauris rhoncus. Nullam non nisi est sit amet facilisis magna. At urna condimentum mattis pellentesque id. Maecenas sed enim ut sem viverra. At ultrices mi tempus imperdiet nulla. Sed faucibus turpis in eu mi bibendum neque. Laoreet non curabitur gravida arcu ac tortor dignissim.
            <br></br> <br></br>
            Sit amet consectetur adipiscing elit. Rhoncus est pellentesque elit ullamcorper. Suspendisse potenti nullam ac tortor vitae purus faucibus. Viverra nam libero justo laoreet sit. Morbi tempus iaculis urna id volutpat lacus laoreet. Gravida neque convallis a cras semper. Arcu risus quis varius quam quisque id diam. In ornare quam viverra orci sagittis. Varius duis at consectetur lorem donec massa. Dolor sit amet consectetur adipiscing. Libero justo laoreet sit amet cursus sit. Phasellus faucibus scelerisque eleifend donec pretium. Blandit cursus risus at ultrices mi tempus. Elementum nisi quis eleifend quam adipiscing vitae. Lobortis elementum nibh tellus molestie.
        </p>
        </div>
        <Footer/>
    </>
  )
}

export default DetailLowongan