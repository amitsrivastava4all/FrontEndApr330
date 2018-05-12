import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './header';
import {Switch,Route,Redirect} from 'react-router-dom';
import {About} from './aboutus';
import {Contact} from './contactus';
import {News} from './news';
import {ResComponent} from './rescomponent';
class App extends Component {
  render() {
    return (
     <div>
       <Header/>
       <h1>SPA Demo</h1>
       <Switch>
        <Route path="/" exact render={()=><h1>Home Page</h1>}/>
        <Route path="/about/:name/:descr" exact component={About}/>
        <Route path="/contact"  exact component={Contact}/>
        <Route path="/news" exact component={News}/>
        <Redirect exact from="/new" to="/news"/>
        <Redirect exact from="/contactus" to="/contact"/>
        <Switch>
          <Route path="/contact/office" exact render={()=><h1>Contact office</h1>}/>
          <Route path="/contact/residence" exact component={ResComponent}/>
        </Switch>
        <Route render={()=><h1>NO PAGE EXIST </h1>}/>
        
        </Switch>
      
     </div>
    );
  }
}

export default App;
