// eslint-disable-next-line no-unused-vars
import React from 'react'
import escape from '../assets/events/escapematrix.png';
import escapeQR from '../assets/events/escapeTheMatrix.svg';
import bollywood from '../assets/events/bollywood.png';
import bollywoodQR from '../assets/events/bollywoodQR.svg';
import riviera24 from '../assets/events/riviera24.svg'

const Events = () => {
  return (
    <>
    <br /><br /> 
    <div style={{marginBottom: 0, paddingBottom: 0,marginTop: '4rem'}} className='background'>
    <img style={{width: '30%'}} src={riviera24} alt="" />
    </div>
    
    <div className="background">
      <div className="events">
        <h1 style={{ fontSize: 60 ,}}>
            Escape The<span style={{ color: '#C477CB' }}> Matrix 2.0</span>
        </h1>
        <div className="images">
            <img src={escape} alt="" />
            <img src={escapeQR} alt="" />
        </div>
        <br />
        <div className="event_info">
        <p>
              Escape the Matrix: A 2-day, 4-game event challenging participants with physical endurance, intellect, psychology, and teamwork, inspired by the suits of a playing deck.
              </p>
              <p>
              <span style={{ color: '#C477CB' }}>Event Theme:</span> Alice in Borderland - The Games Overview
              </p>
              <p>
              Welcome to the twisted Wonderland of &ldquo;Alice in Borderland,&ldquo; where reality takes a surreal turn, and survival is the ultimate prize. This event features four distinct card-themed games, each designed to challenge different aspects of the participants: Spades for physical endurance, Diamonds for intellect, Hearts for psychology, and Clubs for balance with an element of teamwork.
              </p>
        </div>
      </div>
      <a id='event2'></a>
      <div className="events">
        <h1 style={{ fontSize: 60 ,}}>
        <span style={{ color: '#C477CB' }}> Bollywood</span> Bash 2.0
        </h1>
        <div className="images">
            <img src={bollywood} alt="" />
            <img src={bollywoodQR} alt="" />
        </div>
        <br />
        <div className="event_info">
        <p><span style={{ color: '#C477CB' }}>Event Theme: </span> 
        Bollywood theme party featuring DJ and participants can dress up as their favourite bollywood characters.
              </p>

              <p>
              It is a Bollywood theme event where participants can dress up in bollywood theme and enjoy dancing in bollywood songs .
              </p>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Events
