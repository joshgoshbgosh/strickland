import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import aboutbek from './../../images/aboutbek.jpg';
import './index.css';

class About extends Component {
  render(){
    return(
      <div>
          <div className="topOutDiv">
            <div className="midOutDiv">
              <div className="innerOutDiv">
                <img src={aboutbek}/>
              </div>
            </div>
          </div>
          <div className="bottomDiv">
          <p className="aboutContent">
          Hi I'm Rebekah!  I was born and raised in North Carolina, where I currently
          live with my husband and daughter.  I have been doing hair professionally since 2008.  I
          love doing hair because I enjoy making people feel better about themselves
          and the smile on their face is priceless.
          </p>
          </div>
      </div>
    );
  }
}

export default About;
