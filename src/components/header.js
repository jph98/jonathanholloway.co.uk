import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import SEO from "../components/seo"

import ReactNavbar from "../components/navbar";

const Header = ({posts, siteTitle }) => {  

  return (
        
    <header style={{ background: `#3d4f5a`, marginBottom: `1.45rem` }}>

      <SEO title="Jonathan Holloway - Consulting CTO: UK (Bristol, Bath, London), Germany (Berlin), Holland (Amsterdam)" 
           keywords={[`CTO`, `Interim CTO`, `Fractional CTO`, `Consulting CTO`, `architect`, `engineering management`, `technology`, 
           `CTO london`, `CTO bristol`, `CTO bath`, `CTO berlin`, `CTO Amsterdam`, 
           `CTO hiring`, `CTO startup`]} />

      <div style={{ margin: `0 auto`, maxWidth: 800, padding: `0rem 0rem 0rem 1rem`}}>                
        <h1 style={{ margin: 0, marginBottom: '0px' }}>
          <Link to="/" style={{ fontSize: `18px`, color: `white`, textDecoration: `none` }}>
            {siteTitle}
          </Link>
        </h1>                  
      </div>

      <div style={{ margin: `0 auto`, maxWidth: 800, padding: `0rem 0rem 0rem 0rem`}}>        
        <ReactNavbar posts={ posts }/>
      </div>

    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header 