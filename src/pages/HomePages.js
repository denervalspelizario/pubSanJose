import React from 'react';
import Hero from '../components/Hero/Hero.js';
import Info from '../components/Info/Info.js';
import Features from '../components/Features/Features.js';


function HomePages(){
  return<>
      <Hero/>
      <Info id="about"/>
      <Features id="features"/>
    </> 
    
  
}

export default HomePages;