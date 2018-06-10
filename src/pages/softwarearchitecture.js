import React from 'react'
import MultiLink from '../components/link.js'
import styled from "styled-components";

const StyledLink = styled(MultiLink)`
  color: darkgrey;
`;

const Architecture = () => (
  <div>
    <p>I provide enterprise/solutions/technical services for all company sizes, including:</p>
    <ul>
      <li><b>Data Lake Architecture</b> - review, design and project rescue</li>
      <li><b>Programme/Project Evaluation</b> - for companies wanting to being outsourcing/nearshoring and how to go about it</li>
      <li><b>Solutions Architecture</b> - assessment of existing, development of target architectures and transition planning </li>
      <li><b>Architecture Review</b> - recommendations around micro-servies transition, analytics/reporting and traditional app development including legacy transition plans</li>
      <li><b>Architecture Training</b>- mentoring for developers to become more adept at architecture and introduce the concepts to busineses</li>
      <li><b>Cloud Training</b>- training around cloud (AWS, Google)</li>
      <li><b>Cloud Transformation Projects</b> - evaluation, planning around transition to cloud (AWS, Google)</li>
    </ul>
    <p>For more details contact me for more information or an initial consultation</p>
  </div>
)


export default Architecture
