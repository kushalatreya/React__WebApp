import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
