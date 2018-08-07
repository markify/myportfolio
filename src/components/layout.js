import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Container from './container'
import './layout.css'
import './main.css'
import { relative } from 'path'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flex: 'wrap',
            flexDirection: 'row',
            margin: '0 auto',
            maxWidth: '65rem',
          }}
        >
          <div
            style={{
              //background: 'red',
              marginRight: '10px',
              width: '30%',
              margin: '0 auto',
              position: 'relative',
            }}
          >
            {' '}
            <Container />
          </div>
          <div
            style={{
              //background: 'green',
              marginRight: '10px',
              width: '65%',
              margin: '0 auto',
            }}
          >
            {children}
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
