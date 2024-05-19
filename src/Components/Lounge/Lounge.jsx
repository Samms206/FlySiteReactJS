import React, { useEffect } from "react";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Lounge = () => {

  //useEffect to animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className="longue container section">
      <div className="sectionContainer grid">
        <div data-aos="fade-up" data-aos-duration="2000" className="wrapperGrid">
          <div className="textDiv">
            <h2>Unaccompanied Minor Lounge</h2>
          </div>
          <div className="grids grid">
            <div className="singleGrid">
              <span className="gridTitle">Help through the airpot</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
            <div className="singleGrid">
              <span className="gridTitle">Priority Boarding</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
            <div className="singleGrid">
              <span className="gridTitle">Care on the flight</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
            <div className="singleGrid">
              <span className="gridTitle">Care on the flight</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="imgDiv">
          <img src="./src/assets/staff.png" alt="staff" />
        </div>
      </div>
    </div>
  );
};

export default Lounge;
