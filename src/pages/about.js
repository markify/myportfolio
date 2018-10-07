import React from 'react'
import { Link } from 'gatsby'
import Zoom from 'react-reveal/Zoom'
import Layout from '../components/layout'
import '../components/about.css'

const SecondPage = () => (
  <Layout>
    <div style={{ padding: '20px' }}>
      <h1 className="section-title">About</h1>
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
      <p>
        I'm Mark. I mostly fancy front-end design workflow. Diving into the
        backend is also fun. I like the simple design and innovative techniques
        on the web. I found an interest in modern web and mobile technology
        because of its evolution throughout the years. Coming across these
        technologies made me curious on how they are built. For the past year, I
        have been learning constantly during uni and exploring new technologies
        that power the web and mobile devices. While on the side, I like cycling
        and playing basketball.
      </p>
      <p>I do enjoy listening to music, Here are my top 3 songs.</p>
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
