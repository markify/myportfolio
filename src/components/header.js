import React from 'react'
import { Link } from 'gatsby'
import icon from '../images/icon.png'
import Pulse from 'react-reveal/Pulse';
export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  
  toggleMenu(){
    this.setState({isToggle: !this.state.isToggle});
  }
  render() {
    return (
      <React.Fragment>
        <nav className="navb">
          <ul className="links">
            <li>
              <Link to="/projects" className="styled-link" activeClassName="aclass">
                Projects
              </Link>
            </li>
           
            <Link to="/" className="styled-link" activeClassName="aclass">
            <Pulse forever duration="1400">
              <img src={icon} alt="crypto logo" />
            </Pulse>
            </Link>
           
            <li>
          
              <Link to="/about/" className="styled-link" activeClassName="aclass">
                About
              </Link>
            </li>
         
          </ul>
          <label className="res-menu">
            <input type="checkbox" defaultChecked={this.state.isToggle} onClick={this.toggleMenu}></input>
            <span className="menu" >
              <span className="hamburger" >
              </span>
            </span>
            <ul>
              <li>
                <Link to="/projects" onClick={this.toggleMenu} className="ham-links">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about/" onClick={this.toggleMenu} className="ham-links">
                  About
                </Link>
              </li>
            </ul>
          </label>
        </nav>
      </React.Fragment>
    );
  }
}
export default Header
