import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'

import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'
import React from 'react'

function Navb() {
  return (<>
  <Navbar bg="light" expand="lg">
  <Container>
    <Link className='navbar-brand' to="/">Home</Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className='nav-link' to="sobremi">Sobre mi</Link>
        <Link className='nav-link' to="experiencia">Experiencia</Link>
        <NavDropdown title="Estudios" id="basic-nav-dropdown">
          <HashLink className='dropdown-item' smooth='true' to="estudios/#estudios">Estudios</HashLink>
          <HashLink className='dropdown-item' smooth='true' to="estudios/#cursos">Cursos</HashLink>
          <HashLink className='dropdown-item' smooth='true' to="estudios/#idiomas">Idiomas</HashLink>
          <HashLink className='dropdown-item' smooth='true' to='/#prueba'>otro</HashLink>
        </NavDropdown>
        <Link className='nav-link' to="contactame">Contactame</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </>
  )
}

export default Navb
