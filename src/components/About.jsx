// eslint-disable-next-line no-unused-vars
import React from 'react';
import image from '../assets/image1.png';
import image2 from '../assets/image2.png';

const About = () => {
  return (
    <div className="background">
      <div className="domain">
        <h1 style={{ fontSize: 60 }}>
          <span style={{ color: '#C477CB' }}>DOMAINS</span> WE OFFER
        </h1>
        <div className="text">
          <div className="content">Photography</div>
          <div className="content">Videography</div>
          <div className="content">Design</div>
          <div className="content">Photography</div>
          <div className="content">Videography</div>
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="aboutus">
        <div className="aboutus-image">
          <img src={image2} alt="" />
        </div>
        <div className="aboutus-content">
          <h1 style={{ fontSize: 60 }}>
            <span style={{ color: '#C477CB' }}>ABOUT</span> US
          </h1>
          <div className="aboutus-text">
            <div className="aboutus-para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas mollitia asperiores consequatur dolore nostrum, voluptatem officiis ex? Maiores similique suscipit incidunt, facilis dolorem adipisci autem, doloribus optio velit quidem neque?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fugit rem dolorum cum voluptatibus enim voluptates ratione nesciunt et animi voluptas doloremque quo tempora illo, dignissimos harum odit, expedita quibusdam debitis!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
