import React from 'react'

const Home = () => {
  return (
    <div className='home flex container'>

      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src="./src/assets/video.mp4" autoPlay loop muted className="video"></video>
        </div>

        <img src="./src/assets/plane.png" alt="plane" className="plane" />
      </div>

    </div>
  )
}

export default Home
