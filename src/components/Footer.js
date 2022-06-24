import React from 'react';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer">
      <div className='left-footer'>
        <h2 className='footer-title title-footer'>Quick access</h2>
        <div className='quick-links'>
         <Link to="/About" className='footer-links'>Who we are </Link>
         <Link to="/About" className='footer-links'>Where we are </Link>
         <Link to="/project" className='footer-links'>What we do</Link>
        </div>
      </div>
      <div className='social-links'>
        <h2 className='follow-us title-footer'>Follow Us</h2>
        <a href="www.youtube.com" className='youtube-icone'>
            <FontAwesomeIcon icon={faYoutube} size='2x'/> Youtube
        </a>
      </div>

  </div>
);

export default Footer;