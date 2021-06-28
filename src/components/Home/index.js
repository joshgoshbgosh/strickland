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
import years from './../../images/years.png';
import wedseven from './../../images/wedseven.jpg';
import wedFive from './../../images/wedFive.jpg';
import wedFour from './../../images/wedFour.jpg';
import './index.css';

class Home extends Component {
  render() {

    return (
      <div>
        <div className="top-intro-div">

        <div className="picYears">
        <div>
        <div className="home-card-div ">
          <div className="bek-photo-div">
            <img className="bekblkwhthome"src={bekblkwht}/>
          </div>

          </div>
          <div className="yearsDiv d-none d-lg-block">
            <img src={years}/>
          </div>
          <div className="yearsDivPhone d-block d-sm-none">
            <img src={years}/>
          </div>
          </div>
        </div>
        <div className="missionBox">
          <div className="missionContent">
            <h1>MY MISSION</h1>
            <p>My mission is to build strong relationships with my clients based on
            trust, honesty, and communication.  I want everyone who sits in my chair
            to feel like their voice is being heard.  When you leave I want you feeling
            confident and beautiful.</p>
          </div>
        </div>

        </div>

        <div className="mobile-testimonial d-block d-sm-none">
        <Carousel fade>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={wedFour}
    />
    <Carousel.Caption>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <p className="mobile-testp">Excellent stylist.  Wonderful atmosphere.  Priced correctly.  Highly recommend Rebekah.</p>
      <p className="mobile-testp">Jane Poole</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={wedseven}
    />


    <Carousel.Caption>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
      <p className="mobile-testp">Rebekah is well educated, experienced, honest, and kind. She encompasses everything you are looking for when trusting someone with your hair. She goes the extra mile in making her client’s feel comfortable and confident. She is an expert in her field and provides personalized recommendations while accommodating each of her client’s unique styles. I have trusted Rebekah for over 8 years with all my hair needs from product suggestions, color, cuts, and updo’s. She is not only my lifelong stylist, but my friend. You will have the same feeling after the first time you sit in her chair!</p>
      <p className="mobile-testp">Erin Wheeler</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={wedFive}
    />
    <Carousel.Caption>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
      <p className="mobile-testp">Thanks for doing an amazing job on my hair.  The color & cut are always perfect.  I always get so many compliments on my hair.
            I have to give you all the credit.</p>
        <p className="mobile-testp">Zel</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        <div className="testimonial d-none d-md-block">
        <Carousel fade>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={wedFour}
    />
    <Carousel.Caption>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <p className="testp">Excellent stylist.  Wonderful atmosphere.  Priced correctly.  Highly recommend Rebekah.</p>
      <p className="testp">Jane Poole</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={wedseven}
    />


    <Carousel.Caption>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
      <p className="testp">Rebekah is well educated, experienced, honest, and kind. She encompasses everything you are looking for when trusting someone with your hair. She goes the extra mile in making her client’s feel comfortable and confident. She is an expert in her field and provides personalized recommendations while accommodating each of her client’s unique styles. I have trusted Rebekah for over 8 years with all my hair needs from product suggestions, color, cuts, and updo’s. She is not only my lifelong stylist, but my friend. You will have the same feeling after the first time you sit in her chair!</p>
      <p className="testp">Erin Wheeler</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={wedFive}
    />
    <Carousel.Caption>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
      <p className="testp">Thanks for doing an amazing job on my hair.  The color & cut are always perfect.  I always get so many compliments on my hair.
            I have to give you all the credit.</p>
        <p className="testp">Zel</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        <div className="products">
          <div className="rowOne">
            <a className="americancrew"href="https://www.americancrew.com/"target="_blank" rel="noopener noreferrer"><img className="americancrew"src={americancrew}/></a>

            <a className="bedhead"href="https://www.bedhead.com/us/"target="_blank" rel="noopener noreferrer"><img className="bedhead"src={bedhead}/></a>
          </div>
          <div className="rowTwo">
            <a className="goldwell"href="https://www.goldwell.com/en-us/home/"target="_blank" rel="noopener noreferrer"><img className="goldwell"src={goldwell}/></a>

            <a className="joicologo"href="https://www.joico.com/"target="_blank" rel="noopener noreferrer"><img className="joicologo"src={joicologo}/></a>
          </div>
          <div className="rowThree">
            <a className="aquage"href="https://aquage.com/"target="_blank" rel="noopener noreferrer"><img className="aquage"src={aquage}/></a>

            <a className="itsaten"href="https://itsa10haircare.com/"target="_blank" rel="noopener noreferrer"><img className="itsaten"src={itsaten}/></a>
          </div>
          <div className="rowFour">
            <a className="kms"href="https://www.kmshair.com/en-US/Style-Matters/"target="_blank" rel="noopener noreferrer"><img className="kms"src={kms}/></a>

            <a className="matrix"href="https://www.matrix.com/"target="_blank" rel="noopener noreferrer"><img className="matrix"src={matrix}/></a>
          </div>
          <div className="rowFive">
            <a className="moroccanoil"href="https://www.moroccanoil.com/us_en/limited-edition-dry-shampoo"target="_blank" rel="noopener noreferrer"><img className="moroccanoil"src={moroccanoil}/></a>

            <a className="sexyhairlogo"href="https://www.sexyhair.com/"target="_blank" rel="noopener noreferrer"><img className="sexyhairlogo"src={sexyhairlogo}/></a>
          </div>
        </div>
      </div>

    );
  }
}
export default Home;
