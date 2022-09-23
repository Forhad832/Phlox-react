import React from 'react'

const SmallCardData = ({brand,name,IMG}) => {
  return (
    <article className='flex'>
      <div>
      <h4>{brand}</h4>
      <h3>{name}</h3>
      <button className='btn text-black' style={{padding:'10px 24px',margin:"0",textAlign:'justify'}}>Shop</button>
      </div>
      <div>
        <img className='img' src={IMG} alt={name} />
      </div>
    </article>
  )
}

export default SmallCardData
