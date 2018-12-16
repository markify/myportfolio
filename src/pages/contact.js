import React from 'react'
import '../components/styles/contact.css'
import Layout from '../components/layout'
import { FaTwitter, FaEnvelope } from 'react-icons/fa'
const SecondPage = () => (
  <Layout>
    <div style={{ padding: '20px' }}>
      <h1 className="section-title">Contact</h1>
      <div className="contact-section">
        <p>
          {' '}
          If you would like to contact me, I started using Twitter more often
          <span className="icon-green">
            <a
              href="https://twitter.com/markioh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </span>
        </p>
        <p>
          {' '}
          Feel free to contact me through the email below, I would love to chat.
        </p>
        <span className="icon-green">
          {' '}
          <FaEnvelope />
        </span>
        <a href="mailto:marksordev@gmail.com">
          {' '}
          marksordev@gmail.com
        </a>
      </div>
    </div>
  </Layout>
)

export default SecondPage
