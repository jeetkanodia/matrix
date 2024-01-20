// eslint-disable-next-line no-unused-vars
import React from 'react';
import About from './About';

const Home = () => {
  return (
    <>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
      <h1 className="heading" style={{ fontWeight: 900, fontSize: 60, color: '#4CAF50' }}>
        MATRIX
      </h1>
      <h1 className="heading multimedia" style={{ fontWeight: 900, fontSize: 60, color: '#4CAF50' }}>
        VIT MULTIMEDIA CLUB
      </h1>
    </div>
    <About/>
    </>
  );
};

export default Home;
