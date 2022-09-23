import React from 'react'
import { BsArrowUpCircleFill } from 'react-icons/bs'
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa'
import Logo from './logo.png'
const Footer = () => {
  return (
   <footer>
    <div className="container">
        <div className="footer">
            <div>
                <img src={Logo} alt="logo" />
                <div className="f-content">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some formed humour</p>
                </div>
            </div>
            <div>
                <h3>Meet Phlox</h3>
                <div className="list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Our Ecosystem</a></li>
                </div>
            </div>
            <div>
                <h3>Quick Link</h3>
                <div className="list">
                    <li><a href="#">News</a></li>
                    <li><a href="#">Article</a></li>
                    <li><a href="#">Help center</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Licence</a></li>
                    <li><a href="#">Freebies</a></li>
                </div>
            </div>
            <div>
                <h3>Category Link</h3>
                <div className="list">
                    <li><a href="#">Graphics</a></li>
                    <li><a href="#">Video</a></li>
                    <li><a href="#">Presentation</a></li>
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">Font</a></li>
                    <li><a href="#">Web Templates</a></li>
                </div>
            </div>
            <div>
                <h3>Follow us on <span style={{marginLeft:"5px"}}><FaFacebook /> <FaGithub /> <FaInstagram /></span></h3>
                <hr />
                <h3>Subscribe</h3>
                <p>Send me tips, trends, freebies, updates & offers.</p>
                <input type="email" placeholder='type email' />
                <button>send</button>
            </div>
        </div>
        <hr />
        <div className="row">
            <p>© 2022 Electronic Shop - Forhad Hossen. All rights reserved.</p>
            <p>Term And Conditions | Privacy Policy Browse Demos Buy Now! Export Section</p>
        </div>
        <div className="up-icon">
           <a href="#"> <BsArrowUpCircleFill className='a'/></a>
        </div>
    </div>
   </footer>
  )
}

export default Footer
