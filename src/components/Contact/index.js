import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import contact from './../../images/contact.jpg';
import './index.css';

class Contact extends Component {
  render() {
    return (
      <div>
      <div className="topContact">
        <img src={contact}/>
      </div>
      <div className="formDiv">
      <form action="https://getform.io/f/53954fb8-fd9a-42a6-b1b9-6fcb5eaa7576" method="POST">
        <input type="text" name="name" placeholder="FIRST NAME"/>
        <input type="text" name="name" placeholder="LAST NAME"/>
        <input type="tel" name="tel" placeholder="TELEPHONE"/>
        <input type="email" name="email" placeholder="EMAIL"/>
        <input className="message"type="text" name="message" placeholder="MESSAGE"/>
        <button className="submit"type="submit">SEND</button>
      </form>
      </div>

      </div>
    );
  }
}
export default Contact;
