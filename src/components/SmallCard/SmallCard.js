import React from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Cofee from './Coffe.png'
import Drone from './drone.png'
import Laptop from './laptop.png'
import Mask from './mask.png'
import SmallCardData from './SmallCardData'
const SmallCard = ({brand,name,IMG}) => {
  return (
    <section>
      <div className="container">
       
           <Swiper
           
           spaceBetween={30}
           grabCursor={true}
           slidesPerView={4}
           loop={true}
           className='swiper-div'
           > 
            <SwiperSlide className='bg-1'> 
              
                <SmallCardData  brand='Apple' IMG={Laptop} name='New Product'/>
          
            </SwiperSlide>
           <SwiperSlide className='bg-2'>
        
                <SmallCardData brand='Apple' IMG={Drone} name='New Product'/>
          
           </SwiperSlide>
          <SwiperSlide className='bg-3'>
         
                <SmallCardData brand='Apple' IMG={Mask} name='New Product'/>
        
          </SwiperSlide>
         
         <SwiperSlide className='bg-4'>
      
                <SmallCardData brand='Apple' IMG={Cofee} name='New Product'/>
     
         </SwiperSlide>
            
           </Swiper>
      
      </div>
    </section>
  )
}

export default SmallCard
