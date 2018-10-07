import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import '../components/about.css'
const SecondPage = () => (
  <Layout>
    <div style={{ padding: '20px' }}>
      <h1 className="section-title">About</h1>
      <p>
        {' '}
        <span className="greenfont">
          <strong> Hi There!</strong>
        </span>
      </p>
      <p>
        My name is Mark, I'm from the Bay Area. I have different hobbies such as
        cycling, chess and basketball.
      </p>
      <p>I do enjoy listening to music, Here are my top 3 songs.</p>
      <p>
        Feel free to
        <Link
          to="/contact/"
          activeClassName="aclass"
          style={{
            fontWeight: '400',
            fontSize: '20px',
            textDecoration: 'none',
            color: '#16A085',
          }}
        >
          {' '}
          contact{' '}
        </Link>
        me if you would like to work on a projects together or want to chat. I
        would love to contribute on open source projects.
      </p>
    </div>
  </Layout>
)

export default SecondPage
