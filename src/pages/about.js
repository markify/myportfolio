import React from 'react'
import { Link } from 'gatsby'
import Zoom from 'react-reveal/Zoom'
import Layout from '../components/layout'
import '../components/styles/about.css'
import Fade from 'react-reveal/Fade'
const SecondPage = () => (
  <Layout>
    <div style={{ padding: '20px' }}>
      
      <h1 className="section-title">About</h1>
      <Fade up>
      <p>
        {' '}
        <span className="greenfont">
          <strong>
            {' '}
            Hi There!{' '}
            <span role="img" aria-label="smiley">
              😃
            </span>
          </strong>
        </span>
      </p>
      <p className="bio">
        Hello, there! I am Mark and I'm a front end and mobile developer.
        I started my journey as self-taught game developer then transitioned into web and mobile.
        Ever since then I found passion in web and mobile technologies. In my free time, I spend hours honing my skills
        to become a better software engineer. Building new projects and challenging myself to perfect my craft.
      </p>
      <p>I do enjoy listening to music, Here are my top 3 songs.</p>
      </Fade>
      <Zoom left duration="1900">
        <iframe
          title="Spotify playlist"
          src="https://open.spotify.com/embed/playlist/6tuvBqmy9UsSIlTH3WHyLS"
          width="300"
          height="250"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </Zoom>
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
