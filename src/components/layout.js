import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './styles/layout.css'

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
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>
        <React.Fragment>
          <Header siteTitle={data.site.siteMetadata.title} />
            <div className="contents"  style={{ margin: '0 auto', maxWidth: '65rem'}}>
              <div style={{ marginTop:'100px'}}>
            {children}
              </div>
              <Footer/>
            </div>  
        </React.Fragment>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
