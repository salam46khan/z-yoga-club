import React from 'react';
import Hero from './page/Hero/Hero';
import About from './page/About/About';
import Why from './page/Why/Why';
import Membership from './page/Membership/Membership';
import Class from './page/Class/Class';
import Event from './page/Events/Event';
import Team from './page/Team/Team';
import Testimonials from './page/Testimonials/Testimonials';
import Practice from './page/Practice/Practice';

const App = () => {
  return (
    <div className='myFont'>
      <Hero></Hero>
      <About></About>
      <Why></Why>
      <Membership></Membership>
      <Class></Class>
      <Event></Event>
      <Testimonials></Testimonials>
      <Team></Team>
      <Practice></Practice>
    </div>
  );
};

export default App;