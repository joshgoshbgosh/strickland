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
      </div>
    );
  }
}
export default Home;
