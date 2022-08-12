import React from 'react'
import Heading from './components/section/heading';
import LightCTA from './components/section/light-cta';
import LightContent5 from './components/section/light-content-5';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="pt-8">
        <Heading />
        <LightCTA />
        <LightContent5 />
      </div>
    </div>
  );
}

export default App;
