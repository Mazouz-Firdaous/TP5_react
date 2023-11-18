import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ContactForm from './component/ContactForm';
import ContactCard from './component/ContactCard';

import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, Offcanvas, ListGroup } from 'react-bootstrap';
import './component/StyleCard.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState('form'); // 'form' or 'list'
  const [searchTerm, setSearchTerm] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
    setCurrentPage('list'); // Switch to the list after adding a contact
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='page'>
    {/*<Container >
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand>Gestion des Contacts</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCurrentPage('form')}>Ajouter Contact</Nav.Link>
            <Nav.Link onClick={() => setCurrentPage('list')}>Liste Contacts</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Chercher un contact"
              className="mr-sm-2"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Form>
         
        </Navbar.Collapse>
      </Navbar><br /><br />

      {currentPage === 'form' && <ContactForm addContact={addContact} />}
      {currentPage === 'list' && (
        <Row >
          {filteredContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} deleteContact={deleteContact} />
            </Col>
          ))}
        </Row>
      )}
          </Container>*/}
      {['xxl'].map((expand) => (
      <Container fluid >
        <Navbar key={expand} expand={expand} className="bg-light mb-3">
          
            <Navbar.Brand href="#" className='st '>Gestion des Contacts</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ color: 'white' ,backgroundColor: 'white', marginRight: '10px'}}/>
            <Navbar.Offcanvas
            className='offcanvas-white'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={() => setCurrentPage('form')}>Ajouter Contact</Nav.Link>
                  <Nav.Link onClick={() => setCurrentPage('list')}>Liste Contacts</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Chercher un contact"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleSearch}
                    value={searchTerm}
                  />
                  <Button variant="outline-success" >Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas></Navbar>
            <br /><br />
            {currentPage === 'form' && <ContactForm addContact={addContact} />}
            {currentPage === 'list' && (
        <Row >
          {filteredContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} deleteContact={deleteContact} />
            </Col>
          ))}
        </Row>
      )}
          </Container>
          
        
      ))}
    </div>
  );
}

export default App;
