import React from 'react'
import {RxCalendar} from 'react-icons/rx'
import {BsShieldCheck} from 'react-icons/bs'
import { BsBookmarkCheck } from 'react-icons/bs'

const Info = () => {
  return (
    <div className="info section">

      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2>Travel to make memories all arround the world</h2>
          <button className="btn">View All</button>
        </div>

        <div className="cardDiv grid">
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <RxCalendar className='icon' />
            </div>
            <span className="cardTittle">Book & Relax</span>
            <p>You can also call air lines from your phone and book online</p>
          </div>
          <div className="singleCard grid">
            <div className="iconDiv flex">
              <BsShieldCheck className='icon' />
            </div>
            <span className="cardTittle">Smart Checklist</span>
            <p>You can also call air lines from your phone and book online</p>
          </div>
          <div className="singleCard grid">
            <div className="iconDiv flex">
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
