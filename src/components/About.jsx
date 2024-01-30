// eslint-disable-next-line no-unused-vars
import React from 'react';
import image2 from '../assets/image2.png';
import escape from '../assets/events/bollywood.png';
import bollywood from '../assets/events/escapematrix.png';
import Card from './Card';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="background">
        <Link to="/events">
          <div className="events" style={{marginLeft:"5rem"}}>
            <h1 style={{ fontSize: 60, color:"white" }}>
              Our Flagship <span style={{ color: '#C477CB' }}> Events</span>
            </h1>
            <div className="images">
              <img src={bollywood} alt="" />
              <img src={escape} alt="" />
            </div>
          </div>
        </Link>
        <br />
        <br />
      </div>

      <Card />
      <div className="aboutus" style={{marginLeft:"5rem"}}>
        <div className="aboutus-image">
          <img src={image2} alt="" />
        </div>
        <div className="aboutus-content">
          <h1 style={{ fontSize: 60 }}>
            <span style={{ color: '#C477CB' }}>ABOUT</span> US
          </h1>
          <div className="aboutus-text">
            <div className="aboutus-para">
              <p>MATRIX VIT is a student club in VIT Vellore which aims at promoting talents and knowledge about the digital world and media using various media tools.</p>
              <p>
                We are a bunch of tech savy creative people with artistic vision who would like to encourage and promote talents and express their creative pragmatic mindset. Multimedia is the convergence of these different professions and therefore we have our team divided into domains like
                technical, finance, design and management.
              </p>
              <p>Matrix VIT offers students a chance to spark their imaginations and innovate while showcasing their technical prowess.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
