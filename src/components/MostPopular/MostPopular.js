import React from 'react';
import { data } from './data';
const MostPopular = () => {
  return (
   <section>
    <div className="container">
        <div className="row">
            <div>
                <h2>Most Popular</h2>
            </div>
            <div>
                <a className='btn text-black' href="">View All</a>
            </div>
        </div>
    <div className='grid'>
       {data.map((card)=>{
        const {IMG,id,title,para,btn} = card;

        return (
            <article className='g-card' key={id}>
                <img src={IMG} alt={title} />
                <h3>{title}</h3>
                <p>{para}</p>
                <button className='btn text-black'>{btn}</button>
            </article>
        )
       })}
    </div>
    </div>
   </section>
  )
}

export default MostPopular
