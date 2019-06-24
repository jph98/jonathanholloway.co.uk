import React from "react"
import { graphql } from "gatsby"

import Img from 'gatsby-image'
import Layout from '../components/layout'

const IndexPage = (props) => {  
  return (
    <Layout>     

    <div id="container">   
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jonathanholloway/"> 
          <Img fixed={props.data.linkedin.childImageSharp.fixed} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/82865/jon">
          <Img fixed={props.data.stackoverflow.childImageSharp.fixed} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="http://www.github.com/jph98">
          <Img fixed={props.data.github.childImageSharp.fixed} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@jonathan.holloway">
          <Img fixed={props.data.medium.childImageSharp.fixed} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/jph98">
          <Img fixed={props.data.twitter.childImageSharp.fixed} />
        </a>
        <p>I'm a CTO/technology director, software architect and engineer with 17+ years experience based in London working in tech companies across the UK and Europe. I work with startups/scaleups/enterprises to help with change in terms of process, people or product.  I am an engineer, not just a people manager. For more information, see the FAQ page.</p>
        <table>
          <tr>
            <td><Img fixed={props.data.interim.childImageSharp.fixed} /></td>
            <td><b>Interim CTO Services</b> - Working with companies needing to cover a departing CTO, build a team, carry out project rescue. This includes finding a replacement CTO.&nbsp;
              <a href="mailto: jonathan.holloway@gmail.com?subject=InterimCTO">Email</a>
            </td>
          </tr>
          <tr>
            <td><Img fixed={props.data.fractional.childImageSharp.fixed} /></td>
            <td><b>Fractional CTO Services</b> - For startups/small companies who only need a few days a month.&nbsp;
              <a href="mailto: jonathan.holloway@gmail.com?subject=FractionalCTO">Email</a>
            </td>
          </tr>
          <tr>
            <td><Img fixed={props.data.free.childImageSharp.fixed} /></td>
            <td><b>Free Consultancy Calls/Lunches/Days</b> - I provide help via 30 minute calls, lunch-time slots and two half days a month to "social good" startups/scaleups wanting advice.&nbsp; 
              <a href="mailto: jonathan.holloway@gmail.com?subject=SocialGoodConsulting">Email</a>
            </td>
          </tr>
          <tr>
            <td><Img fixed={props.data.architecture.childImageSharp.fixed} /></td>
            <td><b>Startup Product/Software Architecture Review</b> - Product/architecture support for sole founders who aren't technical.&nbsp;
              <a href="mailto: jonathan.holloway@gmail.com?subject=Architecture">Email</a>
            </td>
          </tr>
          <tr>
            <td><Img fixed={props.data.coaching.childImageSharp.fixed} /></td>
            <td><b>Tech/Product Coaching</b> - tech/product leadership and department/team coaching.&nbsp;
              <a href="mailto: jonathan.holloway@gmail.com?subject=Coaching">Email</a>
            </td>
          </tr>
          <tr>
            <td><Img fixed={props.data.dd.childImageSharp.fixed} /></td>
            <td><b>Due Dilligence</b> - with investors looking for product/engineering insight, for companies working with agencies or companies looking to acquire/bring in-house  product/tech.&nbsp;
              <a href="mailto: jonathan.holloway@gmail.com?subject=DueDilligence">Email</a>
            </td>
          </tr>
        </table>
      </div>    

    </Layout>
  )
}

export default IndexPage

// Retrieve all our blog posts from markdown
export const imageQuery = graphql`
  query ImageQuery {

    linkedin: file(relativePath: { eq: "linkedin.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    free: file(relativePath: { eq: "free.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    angel: file(relativePath: { eq: "angel.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    medium: file(relativePath: { eq: "medium.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    twitter: file(relativePath: { eq: "twitter.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    github: file(relativePath: { eq: "github.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    },    
    stackoverflow: file(relativePath: { eq: "stackoverflow.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
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