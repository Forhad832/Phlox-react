import React from 'react'
import IMG1 from './2.png'
import IMG2 from './3.png'
import Camera from './camera1.png'
import Watch from './wacth.png'
const Health = () => {
  return (
    <section>
      <div className="container">
        <div className="grid">
            <div className="grid-col grid-col-2">
            <div className="">
                   
                    <div className="box">
                        <h4>Health And Fit</h4>
                        <h3>Health Care  And  Monitor</h3>
                       
                        <button style={{padding:'10px 24px', margin:'0'}} className='btn text-black'>Shop</button>
                    </div>
                    <img src={Watch} alt="Watch" />
                  </div>
            </div>

            <div className="grid-col ">
            <div className='text-white flex bg-red'>
          
                    <div className="box">
                    <h4>High Tech Product</h4>
              <h3>Monster Beats Headphones</h3>
                      
                       
                        <button style={{padding:'10px 24px', margin:'0'}} className='btn '>Shop</button>
                    </div>
                    <img   className='small-img' src={IMG1} alt="Watch" />
                  </div>
                  <div className='text-white flex bg-black'>
          
          <div className="box">
          <h4>Minimalism Design</h4>
                        <h3>Music Makes Feel Better</h3>
             
              <button style={{padding:'10px 24px', margin:'0'}} className='btn '>Shop</button>
          </div>
          <img  className='small-img' src={IMG2} alt="Watch" />
        </div>
            </div>

            <div className="grid-col g-3">
            <div className='text-white '>
            <img src={Camera} alt="Watch" />
                    <div className="box">
                        <h4>Play The Dream</h4>
                        <h3>Nikon Ultimate Zoom <br /> Picture</h3>
                       
                        <button style={{padding:'10px 24px', margin:'0'}} className='btn '>Shop</button>
                    </div>
                   
                  </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Health
