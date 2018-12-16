import React from 'react';
import './styles/footer.css'
const Footer = () => {
	return (
		<footer style={{padding:'40px', marginTop: '490px'}}>
        <div style={{color:'white'}}>
          <ul className="abc">
            <li> 
              &#169; Mark S.
            </li>
            <li>
              <a>contact@marks.com</a>
            </li>
            <li> 
              <a>Github</a>
            </li>
            <li> 
              <a>Twitter</a>
            </li>
          </ul>
        </div>
      </footer>
	);
};

export default Footer;
