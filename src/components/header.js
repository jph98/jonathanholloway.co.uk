import React from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"

import SEO from "../components/seo"

const Header = ({posts, siteTitle}) => {  

  return (
        
  <header   
    style={{
      background: `#00A954`,
      marginBottom: `1.45rem`,
    }}
  >

    <SEO title="Jonathan Holloway - Consulting CTO: UK (Bristol, Bath, London), Germany (Berlin), Holland (Amsterdam)" keywords={[`CTO`, `Interum CTO`, `Fractional CTO`, `Consulting CTO`, `architect`, `engineering management`, `technology`, `CTO bristol`, `CTO bath`, `CTO berlin`, `CTO Amsterdam`, `CTO hiring`, `CTO startup`]} />

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, marginBottom: '10px' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          🏠 {siteTitle}
        </Link>
      </h1>          

      {         
        posts.edges.map(({ node }, i) => {          
            console.log('Found: ' + posts.edges.length + ' pages');            
            if (i < (posts.edges.length - 1)) {
              return(
                <a style={{color: 'white', marginRight: '10px', paddingTop: '20px', marginBottom: '20px', textDecoration: 'none'}} href={node.fields.slug} key={i}><span>{node.frontmatter.title} &nbsp;|</span></a>
              )
            } else {
              return(
                <a style={{color: 'white', marginRight: '10px', paddingTop: '20px', marginBottom: '20px', textDecoration: 'none'}} href={node.fields.slug} key={i}><span>{node.frontmatter.title}</span></a>
              )
            }
        }
      )}

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