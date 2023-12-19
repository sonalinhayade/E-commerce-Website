import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import Meta from '../Components/Meta'
import Container from '../Components/Container'

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title='Wishlist' />
            <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross image-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className='image-fluid w-100' alt='watch' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet</h5>
                                    <h6 className='price'>₹ 8,337</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross image-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className='image-fluid w-100' alt='watch' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet</h5>
                                    <h6 className='price'>₹ 8,337</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='wishlist-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross image-fluid' />
                                <div className='wishlist-card-image'>
                                    <img src='images/watch.jpg' className='image-fluid w-100' alt='watch' />
                                </div>
                                <div className='py-3 px-3'>
                                    <h5 className='title'>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch with Wi-Fi+3G Tablet</h5>
                                    <h6 className='price'>₹ 8,337</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default Wishlist