import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import SEO from "../components/seo"

const Header = ({posts, siteTitle}) => {  

  return (
        
    <header style={{ background: `#3d4f5a`, marginBottom: `1.45rem` }}>

      <SEO title="Jonathan Holloway - Consulting CTO: UK (Bristol, Bath, London), Germany (Berlin), Holland (Amsterdam)" keywords={[`CTO`, `Interim CTO`, `Fractional CTO`, `Consulting CTO`, `architect`, `engineering management`, `technology`, `CTO bristol`, `CTO bath`, `CTO berlin`, `CTO Amsterdam`, `CTO hiring`, `CTO startup`]} />

      <div style={{ margin: `0 auto`, maxWidth: 800, padding: `1rem 1.0rem`, }}>

        <h1 style={{ margin: 0, marginBottom: '10px' }}>
          <Link to="/" style={{ color: `white`, textDecoration: `none` }}>
            🏠 {siteTitle}
          </Link>
        </h1>          

        <a style={{color: 'white', marginRight: '10px', paddingTop: '20px', textDecoration: 'none'}} href='/'>
          <span>|&nbsp; Home &nbsp;|</span>
        </a>
        
        {      
          posts.edges.map(({ node }, i) => {          
              console.log('Found: ' + posts.edges.length + ' pages');            
              if (node.frontmatter.visible) {
                if (i < (posts.edges.length - 1)) {                
                  return(
                    <a style={{color: 'white', marginRight: '10px', paddingTop: '20px', textDecoration: 'none'}} href={node.fields.slug} key={i}><span>{node.frontmatter.title} &nbsp;|</span></a>
                  )
                } else {
                  return(
                    <a style={{color: 'white', marginRight: '10px', paddingTop: '20px',  textDecoration: 'none'}} href={node.fields.slug} key={i}><span>{node.frontmatter.title}</span></a>
                  )
                }
              } else {
                console.log('omitting: ' + node.frontmatter.title + ' visible: ' + node.frontmatter.visible);                      
              }
          })
        }

        </div>
        <div style={{ margin: 'auto', paddingBottom: 10, maxWidth: 800 }}>      
          <a style={{color: 'white', marginLeft: 20, marginRight: '20px', textDecoration: 'none'}} href='tel: 07854 651897'>
            <span>☎️ Phone: 07854 651897</span>
          </a>
          <a style={{color: 'white', textDecoration: 'none'}} href='email: jonathan.holloway@gmail.com'>
            <span>📫 Email: jonathan.holloway@gmail.com</span>
          </a>
          
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