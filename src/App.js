import React from 'react'
import Heading from './components/section/heading';
import LightCTA from './components/section/light-cta';
import LightContent5 from './components/section/light-content-5';
import LightContent6 from './components/section/light-content-6';
import LightContent7 from './components/section/light-content-7';
import Testimonial from './components/section/testimonial';
import Pricing from './components/section/pricing';
import Content2 from './components/section/content-2';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="pt-8">
        <Heading />
        <LightCTA />
        <LightContent5 />
        <LightContent6 />
        <LightContent7 />
        <Testimonial />
        <Pricing />
        <Content2 />
      </div>
    </div>
  );
}

export default App;
