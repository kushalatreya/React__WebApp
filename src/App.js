import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
