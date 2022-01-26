import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import services from './../../images/services.jpg';


import inquire from './../../images/inquire.png';
import scissors from './../../images/scissors.png';
import './index.css';

class Services extends Component {
  render() {

    return (
      <div>

        <div className="toppic">
          <img src={services}/>
        </div>
        
        <div className="cuts">
          <h2 className="">H<span className="a">A</span>IR CUTS</h2>
          <h4>L<span className="a">A</span>DIES</h4>
          <p>$23.00</p>
          <h4>GENTLEMEN</h4>
          <p>$20.00</p>
          <h4>BUZZ CUT</h4>
          <p>$15.00</p>
          <h4>CHILDREN UNDER 10</h4>
          <p>$15.00</p>
          <h4>SH<span className="a">A</span>MPOO & CUT</h4>
          <p>$30.00</p>
          <h4>SH<span className="a">A</span>MPOO BLOWOUT</h4>
          <p>$30.00</p>
          <h4>SH<span className="a">A</span>MPOO CUT & STYLE</h4>
          <p>$40.00</p>
          <img src={scissors}/>
          <h2>COLOR</h2>
          <h4>HIGHLIGHTS FULL HE<span className="a">A</span>D</h4>
          <p>PRICING ST<span className="a">A</span>RTS <span className="a">A</span>T $100.00</p>
          <h4>COLOR(ONE COLOR)</h4>
          <p>PRICING ST<span className="a">A</span>RTS <span className="a">A</span>T $75.00</p>
          <h4>COLOR <span className="a">A</span>ND HIGHLIGHTS</h4>
          <p>PRICING ST<span className="a">A</span>RTS <span className="a">A</span>T $95.00</p>
          <h4>B<span className="a">A</span>L<span className="a">A</span>Y<span className="a">A</span>GE</h4>
          <p>PRICING ST<span className="a">A</span>RTS <span className="a">A</span>T $130.00</p>
          <img src={scissors}/>
          <h2>KER<span className="a">A</span>TIN TRE<span className="a">A</span>TMENTS</h2>
          <h4>KER<span className="a">A</span>TIN 6 WEEK TRE<span className="a">A</span>TMENT</h4>
          <p>PRICING ST<span className="a">A</span>RTS <span className="a">A</span>T $130.00</p>
          <h4>KER<span className="a">A</span>TIN 6 MONTH TRE<span className="a">A</span>TMENT</h4>
          <p>PRICING ST<span className="a">A</span>RTS <span className="a">A</span>T $270.00</p>
          <img src={scissors}/>
          <h2>W<span className="a">A</span>XING</h2>
          <h4>EYEBROWS OR LIPS</h4>
          <p>$12.00</p>
          <img src={scissors}/>
          <h2>CONDITIONING</h2>
          <h4>CONDITIONING TRE<span className="a">A</span>TMENTS</h4>
          <p>$15.00</p>
          <img src={scissors}/>
          <h2>UPDOS</h2>
          <h4>SHORT H<span className="a">A</span>IR</h4>
          <p>PRICING ST<span className="a">A</span>RTS <span className="a">A</span>T $50.00</p>
          <h4>LONG H<span className="a">A</span>IR</h4>
          <p>PRICING ST<span className="a">A</span>RTS <span className="a">A</span>T $70.00</p>
          <h4>M<span className="a">A</span>KE UP</h4>
          <p>PRICING ST<span className="a">A</span>RTING <span className="a">A</span>T $50.00</p>
          <h4>ON LOC<span className="a">A</span>TION WEDDINGS</h4>
          <p className="bottomP">PRICING ST<span className="a">A</span>RTING <span className="a">A</span>T $100.00 + UPDO CH<span className="a">A</span>RGE & M<span className="a">A</span>KE UP CH<span className="a">A</span>RGE</p>
        </div>


      </div>

    );
  }
}
export default Services;
