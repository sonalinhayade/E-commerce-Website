import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../Components/BlogCard';
import ProductCard from '../Components/ProductCard';
import SpecialProduct from '../Components/SpecialProduct';
import Container from '../Components/Container';
import { services } from '../utils/data';
const Home = () => {
  return (
    <>
      <Container class1='home-wrapper-1 py-5'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
              <img src='/images/main-banner-1.jpg ' className='img-fluid rounded-3' alt='main banner' />
              <div className='main-banner-content position-absolute'>
                <h4 >SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From ₹ 83,160 or ₹ 3,464/mo.</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative'>
                <img src='/images/catbanner-01.jpg ' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4 >BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>From ₹ 1,41,417 or <br />₹ 5,378/mo.</p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src='/images/catbanner-03.jpg ' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4 >NEW ARRIVAL</h4>
                  <h5>Buy Ipad Air</h5>
                  <p>From ₹ 49,858 or <br />₹ 4,154/mo. for 12 mo. * </p>
                </div>
              </div>
              <div className='small-banner position-relative '>
                <img src='/images/catbanner-02.jpg ' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4 >15% OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest band <br /> styles and colors</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='/images/catbanner-04.jpg ' className='img-fluid rounded-3' alt='main banner' />
                <div className='small-banner-content position-absolute'>
                  <h4 >FREE ENGRAVING</h4>
                  <h5>AirPods Max</h5>
                  <p>High-fidelity playback & <br /> ultra distortion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1='home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              {
                services.map((i,j)=>{
                  return(
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.image} alt='services'/>
                      <div>
                        <h6>{i.title}</h6>
                        <p className='mb-0'>{i.tagline}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1='home-wrapper-3 py-5'>
      <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between align-items-center flex-wrap'>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
              </div>
            </div>
          </div>
      </Container>

      <Container class1='featured-wrapper py-5 home-wrapper-2'>
      <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>

      <Container class1='famous-wrapper py-5 home-wrapper-2'>
      <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative '>
                <img src='images/famous-1.webp' className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From ₹ 33,245 or ₹ 1,384/mo. for 24 mo.* </p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous-2.jpg' className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute text-black'>
                  <h5 className='text-dark'>Studio Display</h5>
                  <h6 className='text-dark'>600 nits of brightness</h6>
                  <p className='text-dark'>27-inch 5K Retina display</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous-3.jpg' className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute text-black'>
                  <h5 className='text-dark'>Smartphones</h5>
                  <h6 className='text-dark'>Smartphone 13 Pro.</h6>
                  <p className='text-dark'>Now in Green from ₹ 83,313 or ₹ 3,470/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/famous-4.jpg' className='img-fluid' alt='famous' />
                <div className='famous-content position-absolute text-black'>
                  <h5 className='text-dark'>HOME SPEAKERS</h5>
                  <h6 className='text-dark'>Room-filling sound.</h6>
                  <p className='text-dark'>From ₹ 58,294 or ₹ 9,674/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
          </div>
      </Container>
  
      <Container class1='special-wrapper py-5 home-wrapper-2'>
      <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special products</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
      </Container>
     
      <Container class1='popular-wrapper py-5 home-wrapper-2'>
      <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
            <div className='row'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
      </Container>
      
      <Container class1='marquee-wrapper py-5'>
      <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-02.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-03.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-04.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-05.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-07.png' alt='brand' />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-08.png' alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>
      
      <Container class1='blog-wrapper py-5 home-wrapper-2'>
      <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>

          </div>
          <div className='row'>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
            <div className='col-3'>
              <BlogCard />
            </div>
          </div>
      </Container>
    </>
  )
}

export default Home