import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel'
import bekblkwht from './../../images/bekblkwht.jpg';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="top-intro-div">
        <div className="mobile-home-card-div d-block d-sm-none">
          <div className="mobile-bek-photo-div d-block d-sm-none">
            <img className="mobile-bekblkwhthome d-block d-sm-none"src={bekblkwht}/>
          </div>

        </div>
        <div className="home-card-div d-none d-lg-block">
          <div className="bek-photo-div">
            <img className="bekblkwhthome"src={bekblkwht}/>
          </div>

        </div>
        <div className="ratebox">
          <div className="intro-right">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <div className="rating">
            <h3>FIVE STAR RATING</h3>
          </div>
        </div>
        </div>
        <div className="testimonial">

        </div>
      </div>
    );
  }
}
export default Home;
