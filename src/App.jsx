import React from 'react';
import Hero from './page/Hero/Hero';
import About from './page/About/About';
import Why from './page/Why/Why';
import Membership from './page/Membership/Membership';
import Class from './page/Class/Class';
import Event from './page/Events/Event';
import Team from './page/Team/Team';

const App = () => {
  return (
    <div className='myFont'>
      <Hero></Hero>
      <About></About>
      <Why></Why>
      <Membership></Membership>
      <Class></Class>
      <Event></Event>
      <Team></Team>
    </div>
  );
};

export default App;