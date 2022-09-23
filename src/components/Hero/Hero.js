import React from 'react'
import { FaAngleRight, FaAppStore, FaAtlassian, FaAtom, FaBezierCurve, FaCamera, FaCar, FaClock, FaDesktop, FaHeadphones, FaHome, FaLaptop, FaMouse, FaStar } from 'react-icons/fa'
import Header from './header-bg.jpg'
import Sony from './sony.jpg'
const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="hero-container">
            <div className="grid">
                <div className="grid-col ">


                    <div className="flex first-col">
                        <div className="flex">
                            <FaMouse className='envelope'/>
                            <p>Computer & Accessories</p>
                        </div>
                        <FaAngleRight className='envelope' />
                    </div>


                    <div className="flex first-col">
                        <div className="flex">
                            <FaCamera className='envelope'/>
                            <p>Cameras,Audio & Video</p>

                        </div>
                        <FaAngleRight className='envelope' />
                    </div>

                    <div className="flex first-col">
                        <div className="flex">
                            <FaLaptop className='envelope'/>
                            <p>Computer & Accessories</p>
                        </div>
                        <FaAngleRight className='envelope' />
                    </div>

                    <div className="flex first-col">
                        <div className="flex">
                            <FaDesktop className='envelope'/>
                            <p>Computer & Accessories</p>
                        </div>
                        <FaAngleRight className='envelope' />
                    </div>

                    <div className="flex first-col">
                        <div className="flex">
                            <FaHome className='envelope'/>
                            <p>Computer & Accessories</p>
                        </div>
                        <FaAngleRight className='envelope' />
                    </div>

                    <div className="flex first-col">
                        <div className="flex">
                            <FaClock className='envelope'/>
                            <p>Computer & Accessories</p>
                        </div>
                        <FaAngleRight className='envelope' />
                    </div>

                    <div className="flex first-col">
                        <div className="flex">
                            <FaHeadphones className='envelope'/>
                            <p>Computer & Accessories</p>
                        </div>
                        <FaAngleRight className='envelope' />
                    </div>

                    <div className="flex first-col">
                        <div className="flex">
                            <FaCar className='envelope'/>
                            <p>Computer & Accessories</p>
                        </div>
                        <FaAngleRight className='envelope' />
                    </div>


                    <div className="flex first-col">
                        <div className="flex">
                            <FaBezierCurve className='envelope'/>
                            <p>Computer & Accessories</p>
                        </div>
                        <FaAngleRight className='envelope' />
                    </div>








                </div>



                <div className="grid-col">   
            
                   <div className='tv-shop'>
                   <img src={Header} alt="" />
                   <div className="img-content">
                     <h3 className='text-white'>TV Shop</h3>
                        <button>Shop By Category</button>
                   </div>
                   </div>
                    <div className="hero-box row">
                        <div className="flex">
                            <FaAtlassian />
                            <p>Free Shipping <br />On All Order</p>
                        </div>
                        <div className="flex">
                            <FaAppStore/>
                            <p>Online Support <br />Technical 24/7</p>
                        </div>
                        <div className="flex">
                            <FaAtom />
                            <p>Big Saving <br />Weeken Sales</p>
                        </div>
                    </div>
               
                </div>
                <div className="grid-col">   
                  <div className='sony-box'>
                    <img src={Sony} alt="" />
                    <div className="box">
                        <h3>Sony Dualsense Controller + USB 3.0 Cable</h3>
                        <div className="flex grid-icon">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <button className='btn text-black'>Add To Cart</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
