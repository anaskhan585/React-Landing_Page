import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className='left animate__animated animate__fadeInLeft animate__slow	2s' >
          <div className='content'>
            <h1>YOUR FEET</h1>
            <h1>DESERVE</h1>
            <h1>THE BEST</h1>
            <p>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <button id='one'>Shop Now</button>
            <button id='two'>Category</button>

            <div className="icons">
                <p>Also Available On</p>
                <img src="/images/flipcart.png" alt="" />
                <img id='three' src="/images/amazon.png" alt="" />
            </div>
          </div>
        </div>
        <div className='right animate__animated animate__fadeInRight animate__slow	2s' >
            <img src="/images/shoe.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
