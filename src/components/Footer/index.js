import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import strdesigntwo from './../../images/strdesigntwo.png';
import beklogowhite from './../../images/beklogowhite.png';
import rs from './../../images/rs.png';
import './index.css';

class Footer extends Component {

  render() {
    return(

      <div>
      <footer>
      <div className="hoursDiv">
          <p className="ptag hour">HOURS</p>
          <p className="ptag">TUESDAY 10:00 - 7:30</p>
          <p className="ptag">WEDNESDAY 10:00 - 3:00</p>
          <p className="ptag">THURSDAY 10:00 - 7:30</p>
          <p className="ptag">OPEN ONLY ONE SATURDAY A MONTH</p>
          <p className="ptag">SATURDAY 9:00 - 4:00</p>
      </div>
      <div className="top-div">
        <div className="inner-div">
            <div className="contactDiv">
              <p>CONTACT</p>
            </div>
            <div className="emailDiv">
              <a className="email"href="/contact">rmlanier17@gmail.com</a>
            </div>
            <div className="numberDiv">
              <a className="phonenumber"href="tel:9192191966">(919)219-1966</a>
            </div>
            <div className="locationDiv">
              <p>LOCATION</p>
            </div>
            <div className="salon">
              <p>Salon 55</p>
            </div>
            <div className="adddiv">
              <a className="address" href="https://www.google.com/maps/place/Salon+55/@35.5266478,-78.7469193,17z/data=!3m2!4b1!5s0x89ac8678534ead99:0xada10443779e3cf8!4m5!3m4!1s0x89ac8679aa1a9bc5:0xc3d943bc098a6cf0!8m2!3d35.5266435!4d-78.7447306"target="_blank" rel="noopener noreferrer">1363 N Raleigh, Angier, NC 27501</a>
            </div>

          </div>
          <div className="rightside">
              <div className="rsdiv">
                <img src={rs}/>
              </div>
              <div className="icondiv">
                  <div className="fbookdiv">
                    <a className="fbook "href="https://www.facebook.com/rebekah.lanier"target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
                  </div>
                  <div className="prestdiv">
                    <a className="prest "href="https://www.pinterest.com/bekahashley/_saved/"target="_blank" rel="noopener noreferrer"><i class="fab fa-pinterest"></i></a>
                  </div>
              </div>
          </div>

      </div>

      <div className="sDesigns-div">
        <div className="website">
          <h5>WEBSITE BY</h5>
        </div>
        <div className="designImg">
          <a href="https://www.linkedin.com/in/josh-lanier-155481200/"target="_blank" rel="noopener noreferrer"><img className="dsignpic"src={strdesigntwo}/></a>
        </div>
      </div>
      </footer>

      </div>
    );
  }

}
export default Footer;
