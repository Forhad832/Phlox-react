import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogdata } from './blogdata';
const Blog = () => {
    const [readMore,setReadMore] = useState(false)
  return (
    <section>
      <div className="container">
      <div className="row">
            <div>
                <h2>Latest News</h2>
            </div>
            <div>
                <Link className='btn text-black' to='/newBlog'>View All</Link>
            </div>
        </div>
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

export default Blog
