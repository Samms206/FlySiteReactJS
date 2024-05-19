import React from 'react'

const Travelers = () => {
  return (
    <div className='travelers container section'>
      <div className="containerSection">
        <h2>
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">

          <div className="singleTraveler">
            <img src="./src/assets/bali.jpeg" alt="" className="destinationImg" />
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src="./src/assets/traveler1.jpeg" alt="" className="travelerImg" />
              </div>
              <div className="travelerName">
                <span>James Scott</span>
                <p>@jamesscott</p>
              </div>
            </div>
          </div>

          <div className="singleTraveler">
            <img src="./src/assets/dubai.jpeg" alt="" className="destinationImg" />
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src="./src/assets/traveler3.jpeg" alt="" className="travelerImg" />
              </div>
              <div className="travelerName">
                <span>James Scott</span>
                <p>@jamesscott</p>
              </div>
            </div>
          </div>

          <div className="singleTraveler">
            <img src="./src/assets/jepang.jpeg" alt="" className="destinationImg" />
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src="./src/assets/traveler2.jpeg" alt="" className="travelerImg" />
              </div>
              <div className="travelerName">
                <span>James Scott</span>
                <p>@jamesscott</p>
              </div>
            </div>
          </div>

          <div className="singleTraveler">
            <img src="./src/assets/paris.jpeg" alt="" className="destinationImg" />
            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src="./src/assets/traveler4.jpeg" alt="" className="travelerImg" />
              </div>
              <div className="travelerName">
                <span>James Scott</span>
                <p>@jamesscott</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Travelers
