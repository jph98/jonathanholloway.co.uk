import React from 'react'
import Link from 'gatsby-link'

class ThirdPartyLinksSection extends React.Component {

  render() {
    return (
      <div>
        <p>
          <b>Social Media, Startup, Tech Community Links</b>
        </p>
        <ul>
          <li><a href="https://www.linkedin.com/in/jonathanholloway/">Linkedin</a></li>
          <li><a href="https://stackoverflow.com/users/82865/jon">Stackoverflow</a></li>
          <li><a href="http://www.github.com/jph98">Github</a></li>
          <li><a href="http://angel.co/jph98">Angel.co Profile</a></li>
          <li><a href="https://angel.co/jonathanholloway">Cofounders Lab Profile</a></li>
          <li><a href="https://www.twitter.com/jph98">Twitter</a></li>
          <li><a href="#">Technology Posts</a></li>
        </ul>
      </div>
    )
  }
}
const IndexPage = () => (
  <div>

    <div>
      <p><b>Profile</b></p>
      <p>I'm a CTO and architect currently based out of Bristol/Bath, but I've worked and offer interim CTO/architecture services in Holland(Amsterdam), Germany(Berlin) and Finland(Helsinki)</p>
    </div>

    <div>
      <p><b>Services</b></p>
      <p>I specialise in technology startup ventures and growing them into bigger companies in Java, Python, Ruby, JS and PHP ecosystems. I also provide:</p>

      <div>
        <div>
          <p>
            <Link to="/interimctoservices/">Interim CTO Services</Link>
          </p>
          <p>
            <Link to="/softwarearchitecture/">Software Architecture Services</Link>
          </p>
        </div>
      </div>
    </div>
    <ul>
      <li>
        <a href="https://docs.google.com/document/d/1hfeLAmaF0ZgpdEFp4JiuPw8O7TK9yoawA0F04zq9FdI/edit">CV</a>
      </li>
      <li>
        <a href="https://docs.google.com/document/d/1R4sUPYu7-s5CJ8t9nCVN-QwzOxSP2pZcJdhe6QD_cLI/edit#">Skills</a>
      </li>
    </ul>
    <p>
      <b>Jobs: </b>Always open to new opportunities, especially startup advisory, interim CTO roles or startup jobs. Drop me a <a href="mailto: jonathan.holloway@gmail.com">message:)</a>
    </p>
    <ThirdPartyLinksSection></ThirdPartyLinksSection>
  </div>
)

export default IndexPage
