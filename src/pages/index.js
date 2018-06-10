import React from 'react'
import styled from "styled-components";
import MultiLink from '../components/link.js';

const StyledLink = styled(MultiLink)`
  color: darkgrey;
`;

const IndexPage = () => (
  <div>

    <div id="container">
      <b>Profile</b>
      <p>I'm a CTO and architect with 15+ years experience based in London/Bristol working across the UK and Europe.  I work within tech startups growing them into bigger companies in Java/Python/ Ruby/JS/PHP ecosystems.</p>
    </div>

    <div id="container">
      <b>Curriculum Vitae and Skills Overview</b>
      <ul>
        <li>
          <StyledLink to="https://docs.google.com/document/d/1hfeLAmaF0ZgpdEFp4JiuPw8O7TK9yoawA0F04zq9FdI/edit">CV</StyledLink>
        </li>
        <li>
          <StyledLink to="https://docs.google.com/document/d/1R4sUPYu7-s5CJ8t9nCVN-QwzOxSP2pZcJdhe6QD_cLI/edit#">Skills</StyledLink>
        </li>
      </ul>
    </div>

    <div id="container">
      <b>Job Opportunities</b>
      <p>Always open to new opportunities, especially startup advisory, interim CTO roles or startup jobs. Drop me a <a href="mailto: jonathan.holloway@gmail.com">message:)</a>
      </p>
    </div>

    <ThirdPartyLinksSection></ThirdPartyLinksSection>

    <div>
      <p>This site was built using <StyledLink to='https://www.gatsbyjs.org/'>Gatsby</StyledLink> &amp; React</p>
    </div>
  </div>
)


class ThirdPartyLinksSection extends React.Component {

  render() {
    return (
      <div>
        <p>
          <b>Social Media, Startup, Tech Community Links</b>
        </p>
        <ul>
          <li><a href="https://medium.com/@jonathan.holloway">Medium Tech Posts</a></li>
          <li><a href="https://www.linkedin.com/in/jonathanholloway/">Linkedin</a></li>
          <li><a href="https://stackoverflow.com/users/82865/jon">Stackoverflow</a></li>
          <li><a href="http://www.github.com/jph98">Github</a></li>
          <li><a href="http://angel.co/jph98">Angel.co Profile</a></li>
          <li><a href="https://www.twitter.com/jph98">Twitter</a></li>          
        </ul>
      </div>
    )
  }
}

export default IndexPage
