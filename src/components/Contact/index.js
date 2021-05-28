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
        <a className="addContact" href="https://www.google.com/maps/place/Salon+55/@35.5266478,-78.7469193,17z/data=!3m2!4b1!5s0x89ac8678534ead99:0xada10443779e3cf8!4m5!3m4!1s0x89ac8679aa1a9bc5:0xc3d943bc098a6cf0!8m2!3d35.5266435!4d-78.7447306"target="_blank" rel="noopener noreferrer">1363 N Raliegh, Angier, NC 27501</a>
      </div>
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
