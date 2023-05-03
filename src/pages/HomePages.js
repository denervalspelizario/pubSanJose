import React from 'react';
import Hero from '../components/Hero/Hero.js';
import Info from '../components/Info/Info.js';
import Eventos from '../components/Eventos/Eventos.js';
import Content from '../components/Content/Content.js';
import { heroData } from '../data/HeroData.js'
import Picture from '../components/Picture/Picture.js';

function HomePages(){
  return(
    <>
      <Hero/>
      <Info id="sobre"/>
      <Eventos id="eventos"/>
      <div id="programacao">
        {heroData.map(( contentData, index ) => ( // renderizando todos as arrays dentro de heroData e repassando via props usando spread operator e o key de referencia 
          <Content {...contentData} key={index} />
        ))}
      </div>
      
      
       
      
      
      <div id="pictures" >
        <Picture />
      </div>
       
    </> 
  );
  
}

export default HomePages;