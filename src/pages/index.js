import React from "react"
import { graphql } from "gatsby"

import Img from 'gatsby-image'
import Layout from '../components/layout'

//import SEO from "../components/seo"

const IndexPage = (props) => {  
  return (
    <Layout>     

<div id="container">
      <p>I'm a CTO/technology director, software architect and engineer with 15+ years experience based in London/Bristol working across the UK and Europe.  I work with startups/scaleups/enterprises providing:.</p>
      <table>
        <tr>
          <td><Img fixed={props.data.fractional.childImageSharp.fixed} /></td>
          <td>Fractional CTO Services</td>
          <td>For startups/small companies who only need a few days a month</td>
        </tr>
        <tr>
          <td><Img fixed={props.data.interim.childImageSharp.fixed} /></td>
          <td>Interim CTO Services</td>
          <td>For companies needing someone until they find a perm CTO</td>
        </tr>
        <tr>
          <td><Img fixed={props.data.architecture.childImageSharp.fixed} /></td>
          <td>Startup Product/Software Architecture</td>
          <td>Product management and software architecture support</td>
        </tr>
        <tr>
          <td><Img fixed={props.data.coaching.childImageSharp.fixed} /></td>
          <td>Tech/Product Coaching</td>
          <td>For technical/product leaders and departments/teams</td>
        </tr>
        <tr>
          <td><Img fixed={props.data.dd.childImageSharp.fixed} /></td>
          <td>Due Dilligence</td>
          <td>For investors looking for product/tech insight, companies who want to use agencies or companies looking to acquire/bring in-house  product/tech</td>
        </tr>
      </table>
    </div>

    <table>
      <tr>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1hfeLAmaF0ZgpdEFp4JiuPw8O7TK9yoawA0F04zq9FdI/edit">
              <Img fixed={props.data.cv.childImageSharp.fixed} />
            </a>
          </td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jonathanholloway/"> 
              <Img fixed={props.data.linkedin.childImageSharp.fixed} />
            </a>
          </td>           
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/82865/jon">
              <Img fixed={props.data.stackoverflow.childImageSharp.fixed} />
            </a>
          </td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="http://angel.co/jph98">
              <Img fixed={props.data.angel.childImageSharp.fixed} />
            </a>
          </td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="http://www.github.com/jph98">
              <Img fixed={props.data.github.childImageSharp.fixed} />
            </a>
          </td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@jonathan.holloway">
              <Img fixed={props.data.medium.childImageSharp.fixed} />
            </a>
          </td>
          <td>
            <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/jph98">
              <Img fixed={props.data.twitter.childImageSharp.fixed} />
            </a>
          </td>
        </tr>
    </table> 

    </Layout>
  )
}

export default IndexPage

// Retrieve all our blog posts from markdown
export const imageQuery = graphql`
  query ImageQuery {

    cv: file(relativePath: { eq: "cv.png" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    linkedin: file(relativePath: { eq: "linkedin.png" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    angel: file(relativePath: { eq: "angel.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    medium: file(relativePath: { eq: "medium.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    twitter: file(relativePath: { eq: "twitter.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    github: file(relativePath: { eq: "github.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    },    
    stackoverflow: file(relativePath: { eq: "stackoverflow.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    fractional: file(relativePath: { eq: "fractional.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    interim: file(relativePath: { eq: "interim.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    },    
    architecture: file(relativePath: { eq: "architecture.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    },   
  dd: file(relativePath: { eq: "dd.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    },  
    coaching: file(relativePath: { eq: "coaching.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }    
  }
`