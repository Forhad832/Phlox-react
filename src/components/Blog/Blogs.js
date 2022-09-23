import React, { useState } from 'react';
import { blogdata } from './blogdata';
const Blogs = () => {
    const [readMore,setReadMore] = useState(false)
  return (
   <section>
    <div className="container">
      
    <div className="grid">
       {blogdata.map((blog)=>{
        const {id,title,IMG,para} = blog
        return (
            <article key={id}>
                <img src={IMG} alt="" />
                <div className="blog-text">
                    <h4>{title}</h4>
                    <p>{readMore ? para : `${para.substring(0,200)}...`}<a onClick={()=>{setReadMore(!readMore)}}>{readMore ? 'Show Less' : 'Learn More'}</a></p>

                </div>
            </article>
        )
       })}
    </div>
    </div>
   </section>
  )
}

export default Blogs
