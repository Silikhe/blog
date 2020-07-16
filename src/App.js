import React from 'react';
import './App.css';
import Home from './containers/Home'
import Post from './containers/Post'
import ContactUs from './containers/ContactUs'
import About from './containers/About'
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

    <Router>
       <div className="App">
      <Header/>
      <Hero/>

      <Route path='/' component={Home}/>
      <Route path='/' component={About}/>
      <Route path='/' component={Post}/>
      <Route path='/' component={ContactUs}/>

     </div>
    </Router>

  );
}

export default App;
