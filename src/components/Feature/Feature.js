import React from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { featureData } from './featureData';
const Feature = () => {
   
  
  return (
   <section id="feature">
    <div className="container">
        <div className="row">
            <div>
                <h2>Our Featured Offers</h2>
            </div>
            <div>
              <div className="flex">
              <button  className='f-btn'>   <FaAngleLeft   className='envelope '/></button>
               <button className='f-btn'>  <FaAngleRight  className='envelope '/></button>
              </div>
            </div>
        </div>
  

 <Swiper   spaceBetween={70}
           grabCursor={true}
           slidesPerView={4}
           loop={true}>  <div className='grid'>
     
 {featureData.map((card)=>{
    const {id,IMG,title,para,btn,icon} = card
    return (
      <SwiperSlide key={id} className='g-card'>
           <article  >
        <img src={IMG} alt={title} />
        <h3>{title}</h3>
        <p>{para}</p>
        <div className="flex p" style={{gap:'0'}}><p >{icon}</p><p>{icon}</p><p>{icon}</p><p>{icon}</p></div>
        <button className='btn text-black'>{btn}</button>
    </article>
      </SwiperSlide>
    )
 })}
  </div>
 </Swiper>
     
           
          
            
           
        
       
   
    </div>
   </section>
  )
}

export default Feature
