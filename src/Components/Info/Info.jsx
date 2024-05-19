import React, { useEffect } from 'react'
import {RxCalendar} from 'react-icons/rx'
import {BsShieldCheck} from 'react-icons/bs'
import { BsBookmarkCheck } from 'react-icons/bs'

import Aos from 'aos';
import 'aos/dist/aos.css';

const Info = () => {

  //useEffect to animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className="info section">

      <div className="infoContainer flex container">
        <div data-aos="fade-up" data-aos-duration="2000" className="titleDiv flex">
          <h2>Travel to make memories all arround the world</h2>
          <button className="btn">View All</button>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000" className="cardDiv flex">
          <div className="singleCard flex">
            <div className="iconDiv flex">
              <RxCalendar className='icon' />
            </div>
            <span className="cardTittle">Book & Relax</span>
            <p>You can also call air lines from your phone and book online</p>
          </div>
          <div className="singleCard flex">
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className='icon' />
            </div>
            <span className="cardTittle">Smart Checklist</span>
            <p>You can also call air lines from your phone and book online</p>
          </div>
          <div className="singleCard flex">
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className='icon' />
            </div>
            <span className="cardTittle">Save More</span>
            <p>You can also call air lines from your phone and book online</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
