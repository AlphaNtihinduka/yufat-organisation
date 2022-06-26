import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css';
import yufatlog from '../images/yufatlog.png'

const Navigation = () => (
  <nav className="nav">
    <div className="right-nav"> <img src={yufatlog} alt="yufat logo" className='yufatlogo'/> </div>
    <div className="left-nav">
      <ul className='left-nav-links'>
      <Link to="/" className='links'>Home </Link>
      <Link to="/team" className='links'>Team </Link>
      <Link to="/project" className='links'>Projects</Link>
      <Link to="/about" className='links'>Contact Us</Link>
      </ul>
    </div>
  </nav>
);

export default Navigation;