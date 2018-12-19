import React from 'react';
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
	return (
    <React.Fragment>
      <footer>
        <ul className="footer-list">
          <li> &#169; Mark Soriano</li> 
          <li>
            <a href="mailto:marksdevs@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
          </li>
          <li> 
            <a href="https://github.com/markify" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </li>
        
          <li> 
            <a href="https://twitter.com/markioh" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </li>
        </ul>
      </footer>
    </React.Fragment>
	);
};

export default Footer;
