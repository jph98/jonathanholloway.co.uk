import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

// TODO FIX ME!
// <Link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Space+Mono'>
// </Link>
// <style>
//   main= {{
//     font-family: 'Space Mono, monospace',
//   }}
// </style>

const Header = () => (
  <div
    style={{
      background: '#fff',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {
            /* Jonathan Holloway - CTO Consulting */
          }
          Dummy Site
        </Link>
      </h1>
    </div>
  </div>
)

// Render the main template
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jonathan Holloway - Freelance CTO: UK (Bristol, Bath, London), Germany (Berlin), Holland (Amsterdam)"
      meta={[
        { name: 'description', content: 'Freelance CTO consultant working across the UK, Germany and Holland' },
        { name: 'keywords', content: 'CTO, architect, consultant, technology, engineering management, CTO bristol, CTO bath, CTO berlin, CTO Amsterdam, CTO hiring, CTO startup, big data' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '3rem auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
