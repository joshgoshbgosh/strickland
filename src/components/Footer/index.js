import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class Footer extends Component {

  render() {
    return(

      <div>
      <footer>
      <a className="fbook d-none d-lg-block"href="https://www.facebook.com/rebekah.lanier"target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
      <a className="prest d-none d-lg-block"href="https://www.pinterest.com/bekahashley/_saved/"target="_blank" rel="noopener noreferrer"><i class="fab fa-pinterest"></i></a>
      </footer>

      </div>
    );
  }

}
export default Footer;
