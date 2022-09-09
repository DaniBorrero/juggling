import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../imagen/icon.png'


export const Navheader = () => {
  return (
    <Navbar variant="dark" className="navbar">
        <Container >
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top "
            />{' '}
            Daniel Borrero
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}
