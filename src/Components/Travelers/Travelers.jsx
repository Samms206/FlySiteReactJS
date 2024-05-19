import React, { useEffect } from "react";

import Aos from 'aos';
import 'aos/dist/aos.css';

const travelersData = [
  {
    id: 1,
    destinationImg: "./src/assets/bali.jpeg",
    travelerImg: "./src/assets/traveler1.jpeg",
    name: "James Scott",
    username: "@jamesscott",
  },
  {
    id: 2,
    destinationImg: "./src/assets/dubai.jpeg",
    travelerImg: "./src/assets/traveler3.jpeg",
    name: "Maya Hernandez",
    username: "@mayahernandez",
  },
  {
    id: 3,
    destinationImg: "./src/assets/paris.jpeg",
    travelerImg: "./src/assets/traveler2.jpeg",
    name: "David Smith",
    username: "@davidsmith",
  },
  {
    id: 4,
    destinationImg: "./src/assets/jepang.jpeg",
    travelerImg: "./src/assets/traveler4.jpeg",
    name: "Evelyn Kim",
    username: "@evelynkim",
  },
];
const Travelers = () => {

  //useEffect to animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className="travelers container section">
      <div className="containerSection">
        <h2 data-aos="fade-up" data-aos-duration="2000">Top travelers of this month!</h2>

        <div data-aos="fade-up" data-aos-duration="2000" className="travelersContainer grid">
          {/* single traveler */}
          {travelersData.map(
            ({ id, destinationImg, travelerImg, name, username }) => {
              return (
                <div key={id} className="singleTraveler">
                  <img src={destinationImg} alt="" className="destinationImg" />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImg} alt="" className="travelerImg" />
                    </div>
                    <div className="travelerName">
                      <span>{name}</span>
                      <p>{username}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
