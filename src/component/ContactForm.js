import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import './StyleCard.css';

const ContactForm = ({ addContact }) => {
  const [contact, setContact] = useState({ nom: '', email: '', telephone: '', adresse: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.nom && contact.email && contact.telephone && contact.adresse) {
      addContact({ id: uuidv4(), ...contact });
      setContact({ nom: '', email: '', telephone: '', adresse: '' });
    }
  };

  return (
    <div className='card'>
    <Form onSubmit={handleSubmit} >
      <Form.Group controlId="formNom">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" name="nom" value={contact.nom} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={contact.email} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formTelephone">
        <Form.Label>Téléphone</Form.Label>
        <Form.Control type="text" name="telephone" value={contact.telephone} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formAdresse">
        <Form.Label>Adresse</Form.Label>
        <Form.Control type="text" name="adresse" value={contact.adresse} onChange={handleChange} />
      </Form.Group>
      <br />

      <Button variant="primary" type="submit">
        Ajouter le contact
      </Button>
    </Form>
    </div>
  );
};

export default ContactForm;