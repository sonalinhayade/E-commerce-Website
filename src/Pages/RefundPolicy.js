import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import Meta from '../Components/Meta'
import Container from '../Components/Container'

const RefundPolicy = () => {
  return (
    <>
        <Meta title={"RefundPolicy"} />
        <BreadCrumb title='RefundPolicy' />
        <Container class1='policy-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='policy'>
                        </div>
                    </div>
                </div>
        </Container>
    </>
  )
}

export default RefundPolicy