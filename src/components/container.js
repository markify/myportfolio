import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaEnvelopeSquare,
  FaGithub,
} from 'react-icons/fa'
import './layout.css'
import './container.css'
import Pulse from 'react-reveal/Pulse'
import reacticon from '../images/react/react-original-wordmark.svg'
const Title = styled.h1`
  font-family: 'Permanent Marker', cursive, sans-serif;
`

const Container = () => (
  <div style={{ padding: '20px' }}>
    <Pulse forever duration="3000">
      <Title>Mark Soriano</Title>
    </Pulse>
    <h4>
      Hi,{' '}
      <span role="img" aria-label="wave">
        👋{' '}
      </span>
      I'm Mark
    </h4>
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
          <a
            href="https://github.com/markify"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/mark-soriano"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <FaLinkedin />{' '}
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/markioh"
            target="_blank"
            rel="noopener noreferrer"
          >
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
      view on Github{' '}
      <a
        href="https://twitter.com/markioh"
        target="_blank"
        rel="noopener noreferrer"
      >
        {' '}
        <FaGithub />
      </a>{' '}
      <br /> &#169; 2018 Mark Soriano,
    </div>
  </div>
)

export default Container
