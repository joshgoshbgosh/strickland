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
      <div className="top-div">
        <div>
            <div>
              <img src={beklogowhite}/>
            </div>
            <div>
              <a className="email">rmlanier17@gmail.com</a>
            </div>
            <div>
              <a className="phonenumber"href="tel:9192191966">(919)219-1966</a>
            </div>
            <div className="salon">
              Salon 55
            </div>
            <div className="adddiv">
              <p className="address">1363 N Raliegh, Angier, NC 27501</p>
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
