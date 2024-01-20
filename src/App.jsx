// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Events />} />
          <Route path="/" element={<Team />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
