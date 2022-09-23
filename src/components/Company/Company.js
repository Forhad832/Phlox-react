import React from 'react'
import Nokia from './nokia.png'
const Company = () => {
  return (
    <section>
      <div className="container">
        <div className="flex wrap">
            <div>
                <img src={Nokia} alt="Nokia" />
            </div>
            <div>
                <img src={Nokia} alt="Nokia" />
            </div>
            <div>
                <img src={Nokia} alt="Nokia" />
            </div>
            <div>
                <img src={Nokia} alt="Nokia" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Company
