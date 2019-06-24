import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
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

        <div style={{ margin: `0 auto`, maxWidth: 750, paddingTop: 0, }}>

          {/* Children */}
          <main>{children}</main>
                                 
        </div>
        
        <Footer/> 
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
