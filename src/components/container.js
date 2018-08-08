import React from 'react'
import { Link } from 'gatsby'
import Header from './header'
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaEnvelopeSquare,
} from 'react-icons/fa'
import './layout.css'
import './container.css'

const Container = () => (
  <div style={{ padding: '20px' }}>
    <h1>Mark Portfolio</h1>
    <h4>Hi, 👋 I'm Mark</h4>
    <p>
      {' '}
      I am a fullstack developer that strive to learn and take on challenges.
      Learning new languages and technologies excites me. Feel free to contact
      me if you would like to work on a project together, or just want to chat.
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

    <ul className="menu-fa">
      <li>
        <a href="https://github.com/markify" target="_blank">
          <FaGithubSquare />
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/" target="_blank">
          {' '}
          <FaLinkedin />{' '}
        </a>
      </li>

      <li>
        <a href="https://twitter.com/" target="_blank">
          {' '}
          <FaTwitterSquare />{' '}
        </a>
      </li>

      <li>
        <a href="#" target="_blank">
          {' '}
          <FaEnvelopeSquare />{' '}
        </a>
      </li>
    </ul>
  </div>
)

export default Container
