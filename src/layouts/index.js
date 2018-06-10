import React from 'react'
import PropTypes from 'prop-types'
import MultiLink from '../components/link.js'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div>
    <div
    style={{
      margin: '0 auto',
      maxWidth: 600,
      padding: '0rem 1rem',
    }}>      
      <h1><MultiLink to="/">Jonathan Holloway, Consulting CTO</MultiLink></h1>
      <div>
        <MultiLink to="/">Home</MultiLink> | 
        &nbsp;<MultiLink to="/interimctoservices">CTO Services</MultiLink> | 
        &nbsp;<MultiLink to="/softwarearchitecture">Architecture Services</MultiLink>
      </div>
    </div>
  </div>
)

// Render the main template
const TemplateWrapper = ({ children }) => (
  <div>

    <Helmet
      title="Jonathan Holloway - Consulting CTO: UK (Bristol, Bath, London), Germany (Berlin), Holland (Amsterdam)"
      meta={[
        { name: 'description', content: 'Consulting CTO working across the UK and Europe' },
        { name: 'keywords', content: 'CTO, architect, consultant, technology, engineering management, CTO bristol, CTO bath, CTO berlin, CTO Amsterdam, CTO hiring, CTO startup, big data' },
      ]}
    />

    <Header />

    <div
      style={{
        margin: '40px auto',
        maxWidth: 600,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {
        children()
      }
      
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
