import React, { Component }from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Header from './../Header';
import Home from './../Home';
import Footer from './../Footer';
import Contact from './../Contact';
import Services from './../Services';
import About from './../About';
import './index.css';


class App extends Component {

render(){


  return (
    <React.Fragment>
      <Header/>
    <div className="App">
      <Switch>
        <Route path='/'component={Home} exact/>
        <Route path='/contact'component={Contact}/>
        <Route path='/services'component={Services}/>
        <Route path='/about'component={About}/>
      </Switch>
    </div>
      <Footer/>
    </React.Fragment>
  );
}
}
export default App;
