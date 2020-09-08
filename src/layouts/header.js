import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
class header extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => this.setState(!this.state.isOpen);

  render() {
    return (
      <>
        <Navbar light expand='md' className='theme-color-background'>
          <Container>
            <NavbarBrand href='/' className='text-white'>
              Image Filter
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='mr-auto' navbar>
                <NavItem>
                  <NavLink
                    exact
                    to='/'
                    ActiveClassName='mr-10 text-white active'
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    exact
                    to='/about'
                    ActiveClassName='mr-10 text-white active'
                  >
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    exact
                    to='/search'
                    ActiveClassName='mr-10 text-white active'
                  >
                    Search
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    exact
                    to='/contact'
                    ActiveClassName='mr-10 text-white active'
                  >
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default header;
