import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import Meta from '../Components/Meta'
import Container from '../Components/Container'
import CustomInput from '../Components/CustomInput'

const Resetpassword = () => {
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrumb title='Reset Password' />
            <Container class1='Signup-wrapper home-wrapper-2 py-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Reset Your Password</h3>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <CustomInput type='password' name='password' placeholder='Enter New Password'/>
                                    <CustomInput type='password' name='confpassword' placeholder='Confirm Password'/>
                                    <div className=' mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                        <button className='button border-0'>Reset Password</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default Resetpassword