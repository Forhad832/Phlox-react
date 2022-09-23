import React, { useRef } from 'react';

import { FaBars, FaCartPlus, FaPhoneAlt, FaRegEnvelope, FaSearch, FaShoppingBag, FaUser } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  const navRef = useRef();
const showbar = ()=>{
  navRef.current.classList.toggle('responsive')
}

  return (
    <header>
      <div className="container">
        <nav>
            <div className="logo">PHLOX</div>
            <div ref={navRef} className="nav_container">

                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Shop</a>
                    <a href="">Blog</a>
                
            </div>
            <div  onClick={showbar} className='bar'>
              <FaBars />
            </div>
            <div className="n-icons flex">
                <div className='flex'>
                    <FaRegEnvelope className='envelope' />
                    <p>example@gmail.com</p>
                </div>
                <div className='flex'>
                    <FaPhoneAlt className='envelope' />
                    <p>01797911253</p>
                </div>
            </div>
        </nav>
        <div className="h-container">
            <div className="row">
                <div className='h-content'>
                <div className="flex text-white">
                        <FaCartPlus className='envelope '/>
                        <p>Shop By Category</p>
                    </div>
                </div>
                   <div className='h-content'>
                    
                   <div className='searchbox flex'>
                            <input type="text" placeholder='Type here' />
                            <FaSearch className='envelope'/>
                        </div>
                   </div>
                    
                  
                   <div className='h-content'>
                    <div className="flex text-white">
                        <FaUser className='envelope '/>
                        <p>Login/Signin</p>
                        <FaShoppingBag className='envelope '/>
                    </div>
                    </div>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
