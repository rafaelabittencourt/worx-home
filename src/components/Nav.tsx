import React from 'react';
import './Nav.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';

export default function Nav() {
    return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">WorX</Navbar.Brand>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="light">Search</Button>
      </Form>
      <Navbar.Text>
      Olá, <a href="#login">Rodrigo</a>
      </Navbar.Text>
      </Container>
    </Navbar>
    )
}
