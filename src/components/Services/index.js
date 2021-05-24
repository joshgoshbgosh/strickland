import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import services from './../../images/services.jpg';
import './index.css';

class Services extends Component {
  render() {

    return (
      <div>
        <div className="toppic">
          <img src={services}/>
        </div>
        <div className="cuts">
          <h2 className="">HAIR CUTS</h2>
          <h4>LADIES</h4>
          <p>$23.00</p>
          <h4>GENTLEMEN</h4>
          <p>$20.00</p>
          <h4>BUZZ CUT</h4>
          <p>$15.00</p>
          <h4>CHILDREN UNDER 10</h4>
          <p>$15.00</p>
          <h4>SHAMPOO & CUT</h4>
          <p>$30.00</p>
          <h4>SHAMPOO BLOWOUT</h4>
          <p>$30.00</p>
          <h4>SHAMPOO CUT & STYLE</h4>
          <p>$40.00</p>
          <h2>COLOR</h2>



        </div>
      </div>

    );
  }
}
export default Services;
