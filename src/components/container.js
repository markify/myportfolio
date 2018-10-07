import React from 'react'
import { Link } from 'gatsby'
import Header from './header'
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaEnvelopeSquare,
  FaGithub,
} from 'react-icons/fa'
import './layout.css'
import './container.css'

const Container = () => (
  <div style={{ padding: '20px' }}>
    <h1>Mark Soriano</h1>
    <h4>Hi, 👋 I'm Mark</h4>
    <p>
      {' '}
      I am a fullstack developer that strive to learn and take on challenges.
      Learning new languages and technologies excites me.
    </p>
    <ul className="links">
      <li>
        <Link to="/" className="styled-link" activeClassName="aclass">
          {' '}
          Projects{' '}
        </Link>
      </li>

      <li>
        <Link to="/about/" className="styled-link" activeClassName="aclass">
          {' '}
          About{' '}
        </Link>
      </li>
      <li>
        <Link to="/contact/" className="styled-link" activeClassName="aclass">
          Contact{' '}
        </Link>
      </li>
    </ul>
    <div>
      <ul className="menu-fa">
        <li>
          <a href="https://github.com/markify" target="_blank">
            <FaGithubSquare />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/mark-soriano" target="_blank">
            {' '}
            <FaLinkedin />{' '}
          </a>
        </li>

        <li>
          <a href="https://twitter.com/markioh" target="_blank">
            {' '}
            <FaTwitterSquare />{' '}
          </a>
        </li>

        <li>
          <Link to="/contact/">
            <FaEnvelopeSquare />{' '}
          </Link>
        </li>
      </ul>
    </div>
    <div class="source">
      {' '}
      Built by me, view on Github <FaGithub /> <br /> &#169; 2018 Mark Soriano,
    </div>
  </div>
)

export default Container
