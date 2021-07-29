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
import josh from './../../images/josh.jpg';
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
            <p>My m<span className="i">i</span>ss<span className="i">i</span>on <span className="i">i</span>s to bu<span className="i">i</span>ld strong relat<span className="i">i</span>onsh<span className="i">i</span>ps w<span className="i">i</span>th my cl<span className="i">i</span>ents based on
            trust, honesty, and commun<span className="i">i</span>cat<span className="i">i</span>on.  I want everyone who s<span className="i">i</span>ts <span className="i">i</span>n my cha<span className="i">i</span>r
            to feel l<span className="i">i</span>ke the<span className="i">i</span>r vo<span className="i">i</span>ce <span className="i">i</span>s be<span className="i">i</span>ng heard.  When you leave I want you feel<span className="i">i</span>ng
            conf<span className="i">i</span>dent and beaut<span className="i">i</span>ful.</p>
          </div>
        </div>

        </div>

        <div className="testimonial ">
          <div className="tmony">
           <p className="testm">Testimonials</p>
          </div>
          <div className="test">
            <p className="testp">Excellent stylist.  Wonderful atmosphere.  Priced correctly.  Highly recommend Rebekah.</p>
            <p className="testi">~ J<span className="a">a</span>ne Poole ~</p>
          </div>
          <div className="testline">
          </div>
          <div className="test">
            <p className="testp">Rebekah is well educated, experienced, honest, and kind. She encompasses everything you are looking for when trusting someone with your hair. She goes the extra mile in making her client’s feel comfortable and confident. She is an expert in her field and provides personalized recommendations while accommodating each of her client’s unique styles. I have trusted Rebekah for over 8 years with all my hair needs from product suggestions, color, cuts, and updo’s. She is not only my lifelong stylist, but my friend. You will have the same feeling after the first time you sit in her chair!</p>
            <p className="testi">~ Er<span className="a">i</span>n Wheeler ~</p>
          </div>
          <div className="testline">
          </div>
          <div className="test">
            <p className="testp">Thanks for doing an amazing job on my hair.  The color & cut are always perfect.  I always get so many compliments on my hair.
            I have to give you all the credit.</p>
            <p className="testi">~ Z<span className="a">e</span>l ~</p>
          </div>
          <div className="testline">
          </div>
          <div className="test">
            <p className="testp">Rebekah is awesome.  She has cut my hair multiple times and
            has always done a great job.  She is really great at doing trendy hair cuts.
            I am super picky about who cuts my hair.  Rebekah is 100%.</p>
            <p className="testi">~ J<span className="a">o</span>sh ~</p>
          </div>
          <div className="testline">
          </div>
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
