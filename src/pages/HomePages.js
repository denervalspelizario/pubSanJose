import React from 'react';
import Hero from '../components/Hero/Hero.js';
import Info from '../components/Info/Info.js';
import Features from '../components/Features/Features.js';
import Content from '../components/Content/Content.js';
import { heroData } from '../data/HeroData.js'

function HomePages(){
  return(
    <>
      <Hero/>
      <Info id="about"/>
      <Features id="programs"/>
      
      <div id="events">
        
        {heroData.map(( contentData, index ) => ( // renderizando todos as arrays dentro de heroData e repassando via props usando spread operator e o key de referencia 
          <Content {...contentData} key={index}  />
        ))}
        
      </div>
      
  
    </> 
  );
  
}

export default HomePages;