import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import Meta from '../Components/Meta'
import { Link } from 'react-router-dom'
import Container from '../Components/Container'
import CustomInput from '../Components/CustomInput'

const Signup = () => {
  return (
    <>
      <Meta title={"Signup"} />
      <BreadCrumb title='Signup' />
      <Container class1='Signup-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='auth-card'>
                <h3 className='text-center mb-3'>Sign Up</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <CustomInput type='text' name='name' placeholder='First name' />  
                  <CustomInput type='tel' name='Mobile' placeholder='Mobile No.' />  
                  <CustomInput type='email' name='email' placeholder='Email' />  
                  <CustomInput type='password' name='password' placeholder='Password' />  
                  <div className=' mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button className='button border-0'>Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Signup