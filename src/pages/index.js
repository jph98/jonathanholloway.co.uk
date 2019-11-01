import React from "react"
import { graphql } from "gatsby"

import Img from 'gatsby-image'
import Layout from '../components/layout'

const IndexPage = (props) => {  
  return (
    <Layout>     

    <div id="container">   

        <table>
          <tbody>
            <tr>
              <td> <img alt="avatar" src="https://s.gravatar.com/avatar/053082988d5c2da6fe500a209f8cfdd8?s=700"/> </td>
              <td>        
              <p>I'm a Chief Technology Officer/Technology Director, Software Engineer/Architect and Engineering Manager with 17+ years experience based in London. I work with all companies from early, mid and late stage companies helping them as a CTO with people, process and product problems.  Working across the UK and Europe, I bring a unique combination as skills with a strong engineering background and experience leading successful teams.</p>
              </td>
            </tr>
          </tbody>
        </table>

        <table>
          <tbody>
          <tr>
            <td><Img alt="interim" fixed={props.data.interim.childImageSharp.fixed} /></td>
            <td><b>Interim CTO Services</b> - Working with companies needing to cover a departing CTO, build a team, carry out project rescue. This includes finding a replacement CTO.            
            </td>
          </tr>
          <tr>
            <td><Img alt="fractional" fixed={props.data.fractional.childImageSharp.fixed} /></td>
            <td><b>Fractional CTO Services</b> - For startups/small companies who only need a few days a month.&nbsp;              
            </td>
          </tr>
          <tr>
            <td><Img alt="calls" fixed={props.data.free.childImageSharp.fixed} /></td>
            <td><b>Free Consultancy Calls/Lunches/Days</b> - I provide help via 30 minute calls, lunch-time slots and two half days a month to "social good" startups/scaleups wanting advice.&nbsp;               
            </td>
          </tr>
          <tr>
            <td><Img alt="startup" fixed={props.data.architecture.childImageSharp.fixed} /></td>
            <td><b>Startup Product/Software Architecture Review</b> - Product/architecture support for sole founders who aren't technical.&nbsp;              
            </td>
          </tr>
          <tr>
            <td><Img alt="coach" fixed={props.data.coaching.childImageSharp.fixed} /></td>
            <td><b>Tech/Product Coaching</b> - tech/product leadership and department/team coaching.&nbsp;              
            </td>
          </tr>
          <tr>
            <td><Img alt="duedilligence" fixed={props.data.dd.childImageSharp.fixed} /></td>
            <td><b>Due Dilligence</b> - with investors looking for product/engineering insight, for companies working with agencies or companies looking to acquire/bring in-house  product/tech.&nbsp;              
            </td>
          </tr>
          </tbody>
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