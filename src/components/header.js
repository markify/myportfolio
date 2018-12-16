import React from 'react'
import { Link } from 'gatsby'
import './styles/hamburger.css'
import './styles/container.css'
import icon from '../images/icon.png'
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
              <Link to="/" className="styled-link" activeClassName="aclass">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="styled-link" activeClassName="aclass">
                Projects
              </Link>
            </li>
              <img src={icon} alt="crypto logo" />
            <li>
              <Link to="/about/" className="styled-link" activeClassName="aclass">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact/" className="styled-link" activeClassName="aclass">
                Contact
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
                <Link to="/" onClick={this.toggleMenu} className="ham-links" >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" onClick={this.toggleMenu} className="ham-links">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about/" onClick={this.toggleMenu} className="ham-links">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact/" onClick={this.toggleMenu} className="ham-links">
                  Contact
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
