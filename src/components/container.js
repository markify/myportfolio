import React from 'react'
import { Link } from 'gatsby'

import Header from './header'

import './layout.css'
import './main.css'

const Container = () => (
  <div style={{ padding: '20px' }}>
    <h1>Mark Portfolio</h1>
    <p>
      Hello, I'm a FullStack Developer. I strive to challenge myself everyday,
      but I'm always happy to play around with new languages and technologies.
    </p>
    <nav class="links">
      <ul>
        <Link to="/"> Projects </Link>

        <Link to="/about/"> About </Link>

        <Link to="/contact/">Contact </Link>
      </ul>
    </nav>

    <ul class="menu-fa">
      <li>
        <a href=""> Github </a>
      </li>

      <li>
        <a href=""> Linkin </a>
      </li>

      <li>
        <a href=""> Twitter </a>
      </li>

      <li>
        <a href=""> Email </a>
      </li>
    </ul>
  </div>
)

export default Container
