import React, { Component } from 'react';
import Home from './containers/Home';
import About from './containers/About';
import Search from './containers/Search';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
  render() {
      return (
          <Router>
              <div>
                  <Navbar>
                      <Navbar.Header>
                          <Navbar.Brand>
                              <Link to="/">City Weather</Link>
                          </Navbar.Brand>
                      </Navbar.Header>
                      <Nav>
                          <NavItem><Link to="/">Home</Link></NavItem>
                          <NavItem><Link to="/search">Search</Link></NavItem>
                          <NavItem><Link to="/about">About</Link></NavItem>
                      </Nav>
                  </Navbar>

                  <Route exact path="/" component={Home}/>
                  <Route path="/search" component={Search}/>
                  <Route path="/about" component={About}/>
              </div>
          </Router>
      )
  }
}

export default App;
