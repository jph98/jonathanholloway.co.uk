import React from 'react'
import MultiLink from '../components/link.js'
import styled from "styled-components";

const StyledLink = styled(MultiLink)`
  color: darkgrey;
`;

const InterimCTOServices = () => (
  <div>
    <p>I provide the following CTO services for companies:</p>
    <ul>
      <li><b>Department/Team Rescue</b> - Stabilising companies/teams when key people have left</li>
      <li><b>Restructuring</b> - transforming teams to be high performing or to address problems</li>
      <li><b>Resourcing</b> - role analysis, design to address team or department problems</li>
      <li><b>Product Management</b> - analysis of product/market and recommendations for engineering</li>
      <li><b>Process Coaching</b> - coaching around processes in agile methodologies</li>
      <li><b>Due-Dilligence</b> - around products/software for acquistion</li>      
    </ul>
  </div>
)

export default InterimCTOServices
