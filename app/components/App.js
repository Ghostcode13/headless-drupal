import React from 'react';
import ReactDOM from 'react-dom';
import axios from '../../node_modules/axios/dist/axios.min.js';
import Nav from './Nav';
import Footer from './Footer';
import Hero from './Hero';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Hero/>
        <Footer />
      </div>
    )
  }
}

export default App;
