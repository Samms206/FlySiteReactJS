import React from 'react'

const Support = () => {
  return (
    <div className='support container section flex'>
      <div className="sectionContainer">

        <div className="tittlesDiv flex">
          <small>Travel Support</small>
          <h2>Plan your trip with confidence</h2>
          <p>Find help with booking and travel plans, see what to expect along the journey!</p>
        </div>
      </div>

      <div className="infoDiv flex">
        <div className="textDiv flex">

          <div className="singleInfo">
            <span className='number'>01</span>
            <h4>Travel requirement for Dubai</h4>
            <p>Find help with booking and travel plans, see what to expect along the journey!</p>
          </div>
          <div className="singleInfo">
            <span className='number colorOne'>02</span>
            <h4>Chaueffeur services at your arrival</h4>
            <p>Find help with booking and travel plans, see what to expect along the journey!</p>
          </div>
          <div className="singleInfo">
            <span className='number colorTwo'>03</span>
            <h4>Multi risk travel insurance</h4>
            <p>Find help with booking and travel plans, see what to expect along the journey!</p>
          </div>
        </div>

        <div className="imgDiv">
          <img src="./src/assets/3windows.png" alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Support
