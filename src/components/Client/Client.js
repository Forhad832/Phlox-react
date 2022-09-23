import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { clientdata } from './clientdata';
const Client = () => {
    const [index,setIndex] = useState(0);
    const {id,name,job,text,image} = clientdata[index];

    const checkNumber = (number)=>{
        if(number > clientdata.length -1){
            return 0;
        }
        if(number < 0){
            return clientdata.length -1
        }
        return number
    }

    const preveious = ()=>{
        setIndex((index)=>{
            let newIndex= index -1;
            return checkNumber(newIndex);
        })
    }
    const next = ()=>{
        setIndex((index)=>{
            let newIndex= index +1;
            return checkNumber(newIndex);
        })
    }
    
  return (
   <section>
    <div className="container">
    <div className="client">
        <h2 style={{textAlign:'center',fontSize:'4rem'}}>Client Review</h2>
        <div className="underline"></div>
    
       
      
            <article className='carouseal' key={id}>
                <img src={image} alt={name} />
                <h4 className='author'>{name}</h4>
                <p className='job'>{job}</p>
                <p className='text'>{text}</p>
                <div className="slider-btn flex">
                  <button onClick={preveious} className='f-btn'>  <FaAngleLeft /></button>
                 <button onClick={next} className='f-btn'>   <FaAngleRight /></button>
                </div>
            </article>
      
    
    </div>
    </div>
   </section>
  )
}

export default Client
