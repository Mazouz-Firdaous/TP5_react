import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ContactCard = ({ contact, deleteContact }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title style={{textAlign: 'center'}}>{contact.nom}</Card.Title>
        <br />
        <Card.Subtitle className="mb-2 text-muted">📩:{contact.email}</Card.Subtitle>
        <Card.Text>📞Téléphone: {contact.telephone}</Card.Text>
        <Card.Text>📭Adresse: {contact.adresse}</Card.Text>
        <Button variant="danger" onClick={() => deleteContact(contact.id)}>
        Supprimer
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;