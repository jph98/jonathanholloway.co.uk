import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink  
} from "reactstrap";

export default class ReactNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
        <Navbar className="navbar" dark expand="md">
          <NavbarToggler className="navbartoggler" onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="nav" navbar>      
              <NavItem className="navitem">
                <NavLink className="pl-0" href='/'>Home |</NavLink>                        
              </NavItem>        
              {
                this.props.posts.edges.map(({ node }, i) => {          
                    if (node.frontmatter.visible) {
                      return(                          
                        <NavItem key={i} className="navitem">
                          <NavLink key={i} className="pl-0" href={node.fields.slug}>{node.frontmatter.title} |</NavLink>                        
                        </NavItem>
                      )
                    } else {
                      return "";
                    }
                })
              }
            </Nav>
          </Collapse>
        </Navbar>
      );
  }
}