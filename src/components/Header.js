import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Search from './Search.js'

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchList: {}
    }
  }

  render() {
    return (
      <Navbar collapseOnSelect bg="light" variant="light" sticky="top">
        <Navbar.Brand href="/">Rimbo Cinema</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/favorites">Favorites</Nav.Link>
          <Nav.Link href="/add">My List</Nav.Link>
        </Nav>
        <Search navigateToSearch={this.props.navigateToSearch}  />
      </Navbar>
    );
  }
}

export default Header;
