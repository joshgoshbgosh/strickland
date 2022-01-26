import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import contact from './../../images/contact.jpg';
import bek1 from './../../images/bek1.jpg';
import './index.css';

class Contact extends Component {
  render() {
    return (
      <div>

      <div className="topContact">
        <img src={contact}/>
      </div>
      <div className="contactInfo">
      <div className="emailContact">
        <p className="emailContact">rmlanier17@gmail.com</p>
      </div>
      <div className="numberContact">
        <a className="phone"href="tel:9192191966">(919)219-1966</a>
      </div>

      <div className="salonContact">
        <p>Salon 55</p>
      </div>
      <div className="addContact">
        <a className="addContact" href="https://www.google.com/maps/place/Salon+55/@35.5266478,-78.7469193,17z/data=!3m2!4b1!5s0x89ac8678534ead99:0xada10443779e3cf8!4m5!3m4!1s0x89ac8679aa1a9bc5:0xc3d943bc098a6cf0!8m2!3d35.5266435!4d-78.7447306"target="_blank" rel="noopener noreferrer">1363 N Raleigh, Angier, NC 27501</a>
      </div>
      </div>

      <div className="formDiv">

      <Form action="https://getform.io/f/53954fb8-fd9a-42a6-b1b9-6fcb5eaa7576" method="POST">
<Form.Group className="mb-3" controlId="formBasicEmail">

    <Form.Control type="text" name="name"placeholder="Enter First Name" />
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">

    <Form.Control type="text" name="name" placeholder="Enter Last Name" />
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">

    <Form.Control type="tel" name="tel"placeholder="Enter Phone" />
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">

    <Form.Control type="email" name="email"placeholder="Enter email" />
    <Form.Text className="text-muted">

    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">

    <Form.Control type="text" name="message"placeholder="Enter Message" />
  </Form.Group>

  <Button className="bg-secondary text-white"variant="black" type="submit">
    Submit
  </Button>
</Form>
      </div>

      </div>
    );
  }
}
export default Contact;
