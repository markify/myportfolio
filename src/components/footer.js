import React from 'react';
import './styles/footer.css'
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'
const Footer = () => {
	return (
    <React.Fragment>
		<footer>
          <ul className="abc">
            <li> 
              &#169; Mark Soriano
            </li> 
             <li>
                <FaEnvelope />
            </li>
            <li> 
              <a><FaGithub /></a>
            </li>
           
            <li> 
              <a><FaTwitter /></a>
            </li>
          </ul>
    </footer>
    </React.Fragment>
	);
};

export default Footer;
