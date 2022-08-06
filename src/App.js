import React from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Features from './components/Features';
import About from './components/About';
import Presentation from './components/Presentation';
import Contract from './components/Contract';
import Quotes from './components/Quotes';
import Web from './components/Web';
function App() {
  return (
    <div className="App">
      <Header/>
      <Presentation/>
      <About  title="Buy The Crypto " button="Buy Now"/>
      <Web/>
      <Features/>
      <Quotes/>
      <Contract/>
    </div>
  );
}

export default App;
