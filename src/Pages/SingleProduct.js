import React, { useState } from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import Meta from '../Components/Meta'
import ProductCard from '../Components/ProductCard'
import ReactStars from 'react-rating-stars-component';
import ReactImageZoom from 'react-image-zoom';
import Color from '../Components/Color';
import { Link } from 'react-router-dom';
import Container from '../Components/Container';

const SingleProduct = () => {
  const props = { width: 400, height: 600, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" };
  const [orderedProduct, setorderedProduct] = useState(false)
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title='Product Name' />
      <Container class1='main-product-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className='other-product-images d-flex flex-wrap gap-15'>
                <div>
                  <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div>
                <div>
                  <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div>
                <div>
                  <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div>
                <div>
                  <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' className='img-fluid' alt='' /></div>
              </div>
            </div>
            <div className='col-6'>
              <div className='main-product-details'>
                <div className='border-bottom'>
                  <h3 className='title'>Kids Headphones Bulk 10 Pack Multi Colored for Students</h3>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'>₹ 8,338</p>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars count={5} size={24} value='4' edit='false' activeColor="#ffd700" />
                    <p className='mb-0 t-review'>(2 Reviews)</p>
                  </div>
                  <a className='review-btn' href='#review'>Write a Review</a>
                </div>
                <div className='border-bottom py-3 '>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Type :</h3>
                    <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Brand :</h3>
                    <p className='product-data'>Havells</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Categories :</h3>
                    <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Tags:</h3>
                    <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>SKU:</h3>
                    <p className='product-data'>SKU027</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Availability:</h3>
                    <p className='product-data'>In Stock</p>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Size:</h3>
                    <div className='d-flex flex-wrap gap-15'>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                      <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                    </div>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Color:</h3>
                    <Color />
                  </div>
                  <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                    <h3 className='product-heading'>Quantity:</h3>
                    <div className=''>
                      <input className='form-control' type='number' name='' style={{ width: '70px' }} id='' min={1} max={10} />
                    </div>
                    <div className='d-flex align-items-center gap-30 ms-5'>
                      <button type='submit' className='button border-0'>Add to Cart</button>
                      <button className='button signup button border-0'>Buy it Now</button>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <div>
                      <img className='fs-5 me-2' src='/images/prodcompare.svg' alt='compare' />
                      <a href='' alt=''>Add to Compare</a>
                    </div>
                    <div>
                      <img className='fs-5 me-2' src='/images/wish.svg' alt='compare' />
                      <a href='' alt=''>Add to Wishlist</a>
                    </div>
                  </div>
                  <div className='d-flex gap-10 flex-column my-3'>
                    <h3 className='product-heading'>Shipping & Returns :</h3>
                    <p className='product-data'>Free Shipping and reyurns available on all orders!<br />
                      We ship all US domestic orders within
                      <b>5-10 business days!</b>
                    </p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-3'>
                    <h3 className='product-heading'>Product Link :</h3>
                    <a href='javascript:void(0);'
                      onClick={() => {
                        copyToClipboard('https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg'
                        );
                      }}
                    >Copy Product Link</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Container>

      <Container class1='description-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
              <h4>Description</h4>
              <div className='bg-white p-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
      </Container>

      <Container class1='reviews-wrapper home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 id='review'>Reviews</h3>
              <div className='review-inner-wrapper'>
                <div className='review-head d-flex justify-content-between align-items-end'>
                  <div>
                    <h4 className='mb-2'>Customer Reviews</h4>
                    <div className='d-flex align-items-center gap-10'>
                      <ReactStars count={5} size={24} value='4' edit='false' activeColor="#ffd700" />
                      <p className='mb-0'>Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a href='' className='text-dark text-decoration-underline'>Write a Review</a>
                    </div>
                  )}
                </div>
                <div className='review-form py-4'>
                  <h4>Write a Review</h4>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <ReactStars count={5} size={24} value='4' edit='true' activeColor="#ffd700" />
                    </div>
                    <div>
                      <textarea name='' id='' className='w-100 form-control' cols='30' rows='4' placeholder='Comments'></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className='button border-0'>Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className='reviews mt-4'>
                  <div className='review'>
                    <div className='d-flex gap-10 align-items-center'>
                      <h6 className='mb-0'>Navdeep</h6>
                      <ReactStars count={5} size={24} value='4' edit='false' activeColor="#ffd700" />
                    </div>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>

      <Container class1='popular-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
            <div className='row'>
              <ProductCard />
            </div>
          </div>
      </Container>
    </>
  )
}

export default SingleProduct