import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel'
import bekblkwht from './../../images/bekblkwht.jpg';
import beklogoletters from './../../images/beklogoletters.png';
import americancrew from './../../images/americancrew.png';
import aquage from './../../images/aquage.png';
import bedhead from './../../images/bedhead.png';
import goldwell from './../../images/goldwell.png';
import itsaten from './../../images/itsaten.png';
import joicologo from './../../images/joicologo.png';
import kms from './../../images/kms.png';
import matrix from './../../images/matrix.png';
import moroccanoil from './../../images/moroccanoil.png';
import sexyhairlogo from './../../images/sexyhairlogo.png';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="top-intro-div">
        <div className="mobile-home-card-div d-block  d-sm-none">
          <div className="mobile-bek-photo-div d-block d-sm-none">
            <img className="mobile-bekblkwhthome d-block d-md-none"src={bekblkwht}/>
          </div>

        </div>
        <div className="home-card-div d-none d-lg-block">
          <div className="bek-photo-div">
            <img className="bekblkwhthome"src={bekblkwht}/>
          </div>

        </div>
        <div className="ratebox">
          <div className="intro-right">

          </div>
          
        </div>
        </div>
        <div className="testimonial">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        </div>
        <div className="products">
          <div className="rowOne">
            <img className="americancrew"src={americancrew}/>

            <img className="bedhead"src={bedhead}/>
          </div>
          <div className="rowTwo">
            <img className="goldwell"src={goldwell}/>

            <img className="joicologo"src={joicologo}/>
          </div>
          <div className="rowThree">
            <img className="aquage"src={aquage}/>

            <img className="itsaten"src={itsaten}/>
          </div>
          <div className="rowFour">
            <img className="kms"src={kms}/>

            <img className="matrix"src={matrix}/>
          </div>
          <div className="rowFive">
            <img className="moroccanoil"src={moroccanoil}/>

            <img className="sexyhairlogo"src={sexyhairlogo}/>
          </div>
        </div>
      </div>

    );
  }
}
export default Home;
