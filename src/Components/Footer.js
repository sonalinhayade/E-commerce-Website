import React from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin,BsYoutube,BsGithub,BsInstagram} from 'react-icons/bs'; 
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-item-center'>
            <div className='col-5 '>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='/images/newsletter.png' alt='newsletter' />
                <h2 className='mb-0 text-white'>Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className='col-7 '>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  SUBSCRIBE
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h5 className='text-white mb-4'>Contact Us</h5>
              <div className='text-white '>
                <address>18826 Camron Springs Apt. 074, <br/>Aglaefurt, United Kingdom <br/> TF3 2BG</address>
                <a href='tel:+9021031203' className='mt-3 d-block mb-3 text-white'>08635 239046</a>
                <a href='email:eBuy@gmail.com' className='mt-2 d-block mb-0 text-white'>eBuy@gmail.com</a>
                
                <div className='Social Links d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white fs-4' href='#'>
                    <BsLinkedin/>
                  </a>
                  <a className='text-white fs-4' href='#'>
                    <BsYoutube/>
                  </a>
                  <a className='text-white fs-4'href='#'>
                    <BsGithub/>
                  </a>
                  <a className='text-white fs-4'href='#'>
                    <BsInstagram/>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h5 className='text-white mb-4'>Information</h5>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-1 mb-2'>Privacy Policy</Link> 
                <Link className='text-white py-1 mb-2'>Refund Policy</Link> 
                <Link className='text-white py-1 mb-2'>Shipping Policy</Link> 
                <Link className='text-white py-1 mb-2'>Terms Of Service</Link> 
                <Link className='text-white py-1 mb-2'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h5 className='text-white mb-4'>Account</h5>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-1 mb-2'>Search</Link> 
                <Link className='text-white py-1 mb-2'>About Us</Link> 
                <Link className='text-white py-1 mb-2'>Faq</Link> 
                <Link className='text-white py-1 mb-2'>Contact</Link> 
                <Link className='text-white py-1 mb-2'>Size Chart</Link>
              </div>
            </div>
            <div className='col-2'>
              <h5 className='text-white mb-4'>Quick Links</h5>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-1 mb-2'>Accessories</Link> 
                <Link className='text-white py-1 mb-2'>Laptops</Link> 
                <Link className='text-white py-1 mb-2'>Headphones</Link> 
                <Link className='text-white py-1 mb-2'>Smart Watches</Link> 
                <Link className='text-white py-1 mb-2'>Tablets</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'> &copy; {new Date().getFullYear()}, Powered by eBuy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer