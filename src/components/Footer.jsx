// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import logon from '../assets/logon.png';
import twitter from '../assets/social/twitterx.svg';
import facebook from '../assets/social/facebook.svg';

// used bootstrap icons
import instagram from '../assets/social/instagram.svg';
import youtube from '../assets/social/youtube.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo">
          <img src={logon} alt="Matrix VIT Multimedia Club Logo" />
        </div>
        <div className="vertical-hr"></div>
        <div className="left-content">
          <p className="footer-text">Matrix(The Multimedia Club) is an official club associated with vellore institute of Technology , Vellore.</p>
          <div className="socials">
            <a href="https://www.instagram.com/matrix.vit" target="_blank" rel="noreferrer">
              <img src={instagram} className="svg-icon" />
            </a>
            <a href="https://youtube.com/@matrixvit2021" target="_blank" rel="noreferrer">
              <img src={youtube} className="svg-icon" />
            </a>

            <img hidden src={facebook} />
            <img hidden src={twitter} />
          </div>
          <p>Created by Matrix | &#169; All Rights Reserved</p>
        </div>
        <div className="vertical-hr"></div>
        <div className="right-content">
          <form action="https://formspree.io/f/xbjndeqy" method="POST">
              <input type="email" name="email" placeholder='Your Email'/>
              <input type="text" name="message" placeholder='Your Query'/>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
