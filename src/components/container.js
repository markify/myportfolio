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
    <nav className="links">
      <ul>
        <Link to="/" className="styled-link">
          {' '}
          Projects{' '}
        </Link>

        <Link to="/about/" className="styled-link">
          {' '}
          About{' '}
        </Link>

        <Link to="/contact/" className="styled-link">
          Contact{' '}
        </Link>
      </ul>
    </nav>

    <ul className="menu-fa">
      <li>
        <a href="">
          <FaGithubSquare />
        </a>
      </li>

      <li>
        <a href="">
          {' '}
          <FaLinkedin />{' '}
        </a>
      </li>

      <li>
        <a href="">
          {' '}
          <FaTwitterSquare />{' '}
        </a>
      </li>

      <li>
        <a href="">
          {' '}
          <FaEnvelopeSquare />{' '}
        </a>
      </li>
    </ul>
  </div>
)

export default Container
