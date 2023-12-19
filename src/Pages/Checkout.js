import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import watch from '../images/watch.jpg'
import Container from '../Components/Container';

const Checkout = () => {
    return (
        <>
            <Container class1='checkout-wrapper home=wrapper-2 py-5'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>eBuy</h3>
                                <nav style={{ "--bs-breadcrumb-divider": '>' }} aria-label="breadcrumb">
                                    <ol className="breadcrumb ">
                                        <li className="breadcrumb-item "><Link to='/cart' className=' text-dark'>Cart</Link></li>
                                        <li className=" total-price breadcrumb-item active " aria-current="page"><IoIosArrowForward /> Information</li>
                                        <li className=" total-price breadcrumb-item active "><IoIosArrowForward /> Shipping</li>
                                        <li className=" total-price breadcrumb-item active " aria-current="page"><IoIosArrowForward /> Payment</li>
                                    </ol>
                                </nav>
                                <h4 className='title total'>Contact Information</h4>
                                <p className='user-details total'>Ojasvi Savarkar (ojashhvi2509@gmail.com)</p>
                                <h4 className='mb-3'>Shipping Address</h4>
                                <form action='' className='d-flex flex-wrap gap-15 justify-content-between'>
                                    <div className='w-100'>
                                        <select name='' className='form-control form-select' id=''>
                                            <option value='' selected disabled>Select Country</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' id='' className='form-control' placeholder='First Name' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' id='' className='form-control' placeholder='Last Name' />
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' id='' className='form-control' placeholder='Address' />
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' id='' className='form-control' placeholder='Apartment' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' id='' className='form-control' placeholder='City' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select name='' className='form-control form-select' id=''>
                                            <option value='' selected disabled>Select State</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' id='' className='form-control' placeholder='Zip Code' />
                                    </div>
                                    <div className='w-100'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <Link to='/cart' className='text-dark'><BiArrowBack className='me-2' />Return to Cart</Link>
                                            <Link to='/cart' className='button'>Continue to Shipping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='border-bottom py-4'>
                                <div className='d-flex mb-2 gap-10 align-items-center '>
                                    <div className='w-75 d-flex gap-10'>
                                        <div className='w-25 position-relative'>
                                            <span style={{"top":"-10px", "right":"2px"}}  className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                            <img className='img-fluid' src={watch} alt='product' />
                                        </div>
                                    <div>
                                        <h5 className='total-price'>regr</h5>
                                        <p className='total-price'>wrjrw</p>
                                    </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <h5 className='total'>₹ 16,623</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='total'>Subtotal</p>
                                    <p className='total-price'>₹ 16,623</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p mb-0 className='total'>Shipping</p>
                                    <p mb-0 className='total-price'>₹ 1,579</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>₹ 8,325</h5>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default Checkout
