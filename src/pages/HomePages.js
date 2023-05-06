import React from 'react';
import Hero from '../components/Hero/Hero.js';
import Info from '../components/Info/Info.js';
import Eventos from '../components/Eventos/Eventos.js';
import { programData } from '../data/programData.js'
import Picture from '../components/Picture/Picture.js';
import Programacao from '../components/Programacao/Programacao.js';

function HomePages(){
  return(
    <>
      <Hero/>
      <Info id="sobre"/>
      <Eventos id="eventos"/>
      <div id="programacao">
        {programData.map(( Data, index ) => ( // renderizando todos as arrays dentro de heroData e repassando via props usando spread operator e o key de referencia 
          <Programacao {...Data} key={index} />
        ))}
      </div>
      <Picture id="pictures"/>
    </> 
  );
  
}

export default HomePages;