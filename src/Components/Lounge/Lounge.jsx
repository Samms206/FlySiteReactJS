import React from "react";

const Lounge = () => {
  return (
    <div className="longue container section">
      <div className="sectionContainer grid">
        <div className="wrapperGrid">
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
        <div className="imgDiv">
          <img src="./src/assets/staff.png" alt="staff" />
        </div>
      </div>
    </div>
  );
};

export default Lounge;
