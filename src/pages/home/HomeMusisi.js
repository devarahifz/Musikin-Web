import React, { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa"
import Layout from '../../components/layout/LayoutMusisi'
import CardsMusisi from '../../components/cards/CardsMusisi'
import { useSelector, useDispatch } from 'react-redux'
import { getAllGigs } from '../../features/gig/GigSlice'

const HomeMusisi = () => {
  const { gig } = useSelector((state) => state.gig)
  const { user } = useSelector((state) => state.authUser)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(getAllGigs())
    })()
    dispatch(getAllGigs())
  }, [dispatch])

  const [search, setSearch] = useState('')
  const [filteredGigs, setFilteredGigs] = useState([])
  const [gigs, setGigs] = useState([])
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setGigs(gig.data)
  //   setFilteredGigs(gig.data)
  //   setLoading(gig.loading)
  // }, [gig])

  // useEffect(() => {
  //   setFilteredGigs(
  //     gigs.filter((gig) =>
  //       gig.gig_name.toLowerCase().includes(search.toLowerCase())
  //     )
  //   )
  // }, [search, gigs])

  return (
    <>
      <Layout>
        <div className='container py-5 my-3'>
          <h1 className='text-center fw-bold pb-3 mb-5'>Cari Live Performance-mu Disini!</h1>
          <div className='mx-auto justify-content-center w-50 pb-5 d-flex d-none'>
            <input className='w-100' type='form-control rounded-0' placeholder='Ketikkan keyword lokasi, jumlah bayaran, atau deskripsi' /><button className='btn btn-primary rounded-0'><FaSearch/></button>
          </div>
          <div className='container d-grid justify-content-center'>
            <div className='row justify-content-center gap-5'>
              {gig?.gigs?.map((gig) => (
                <CardsMusisi 
                  key={gig.id}
                  id={gig.id} 
                  title={gig.title} 
                  location={gig.location}
                  fee={gig.fee}
                  description={gig.description}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default HomeMusisi