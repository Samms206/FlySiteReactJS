import React, { useEffect } from 'react'

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {

  //useEffect to animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  
  return (
    <div className="subscribe section">
      <div  data-aos="fade-up" data-aos-duration="2000" className="sectoinContainer container">
        <h2>Subscribe Newsletter & Get Latest News</h2>
        <div className="inputDiv">
          <input type="text" placeholder='Enter your email'/>
          <button className='btn'>Subscribe</button>
        </div>
      </div>
      
    </div>
  )
}

export default Subscribe
