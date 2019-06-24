import React from "react"

const Footer = () => {  

  return (
        
  <footer style={{ background: `#3d4f5a`, marginBottom: `1.45rem`, }}>

    <div style={{ margin: `0 auto`, maxWidth: 800, padding: `1rem 1.0rem`, }}>

      <a style={{color: 'white', marginRight: '10px', paddingTop: '20px', textDecoration: 'none'}} href='/'>
          <span>© {new Date().getFullYear()}, this site was built with
            {` `} <a href="https://www.gatsbyjs.org">Gatsby and React.</a></span>
        </a>        
    </div>

    
  </footer>
  )
}

export default Footer 