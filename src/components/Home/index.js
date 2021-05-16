import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import bekblkwht from './../../images/bekblkwht.jpg';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="top-intro-div">
          <div className="bek-photo-div">
            <img className="bekblkwhthome"src={bekblkwht}/>
          </div>
          <div className="intro-right">
          <a className="fbook d-none d-lg-block"href="https://www.facebook.com/rebekah.lanier"target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
          <a className="prest d-none d-lg-block"href="https://www.pinterest.com/bekahashley/_saved/"target="_blank" rel="noopener noreferrer"><i class="fab fa-pinterest"></i></a>
            <h3>COSMETOLOGIST</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
