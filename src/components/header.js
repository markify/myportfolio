import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      letterSpacing: '3px',
      fontFamily: 'Lato',
      fontSize: '30px',
      padding: '20px 10px',
      marginBottom: '20px',
      fontWeight: '700',
      display: 'inline-block',
      background: '#16A085 ' /* fallback for old browsers */,
    }}
  >
    {' '}
    <span>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        MS
      </Link>
    </span>
  </div>
)

export default Header
