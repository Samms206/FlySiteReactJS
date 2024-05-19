import React, { useEffect } from 'react'

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  //useEffect to animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])


  return (
    <div className='home flex container'>

      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2000">Create Ever-lasting Memories With Us</h1>
      </div>

      <div data-aos="fade-up" data-aos-duration="2000" className="homeImages flex">
        <div className="videoDiv">
          <video src="./src/assets/video.mp4" autoPlay loop muted className="video"></video>
        </div>

        <img src="./src/assets/plane.png" alt="plane" className="plane" />
      </div>

    </div>
  )
}

export default Home
