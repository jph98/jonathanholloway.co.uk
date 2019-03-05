import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (

  <StaticQuery

    // Result of the query is passed as data to the render function
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(
          sort: { fields: [frontmatter___order] }, 
          filter: { frontmatter: {type: {eq: "page"}} },          
          ) {
            edges {
              node {
                fields{
                  slug
                }          
                frontmatter {
                  date(formatString: "MMMM Do YYYY")
                  title
                  category
                  type
                  order,
                  visible
                }
              }
            }
        },     
      }
    `}

    render={data => (
      <>

        {/* This does not work, passing data.posts from the above query */}
        {/* TODO: use filter in the above GraphQL query */}
        <Header posts={data.allMarkdownRemark} siteTitle={data.site.siteMetadata.title} />

        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >

          {/* Children */}
          <main>{children}</main>

          <footer>            
            <p>Contact me via phone &nbsp; <a href="tel: 07854 651897">07854 651897</a> &nbsp; or &nbsp;<a href="mailto: jonathan.holloway@gmail.com">email</a> &nbsp; for more information</p>
            © {new Date().getFullYear()}, this site was built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby and React.</a>Want to build one? <a href="https://medium.com/p/b6e737c3c02d/">See my Medium tutorial.</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
