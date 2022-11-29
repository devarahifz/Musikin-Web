import React, { useEffect } from 'react'
import CardsRiwayatMusisi from '../../components/cards/CardsRiwayatMusisi'
import { useDispatch, useSelector } from 'react-redux'
import { getAllApplicationsByUserId } from '../../features/application/ApplicationSlice'
import { useParams } from 'react-router-dom'
import Layout from '../../components/layout/LayoutMusisi'

const Riwayat = () => {
  const { application } = useSelector((state) => state.application)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    (async () => {
      await dispatch(getAllApplicationsByUserId(id))
    })()
  }, [dispatch])

  return (
    <>
    <Layout>
    <div className='container py-5 my-3'>
      <h1 className='text-center fw-bold pb-3 '>Riwayat Lamaranmu</h1>
      <div className='container justify-content-center'>
        <div className='row justify-content-center gap-5'>
          {application?.application?.map((application) => (
            <CardsRiwayatMusisi
              key={application?.id}
              id={application?.gig_id}
              createdAt={application?.createdAt}
              status={application?.status}
            />
          ))}
        </div>
      </div>
    </div>
    </Layout>
  </>
  )
}

export default Riwayat