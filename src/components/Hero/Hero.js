import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Container, MainHeading } from '../../globalStyles' // importando os estilos globais
import { HeroSection, HeroText, ButtonWrapper } from './HeroStyles' // importando estilos da page
import Navbar from '../Navbar/Navbar'; // importando a navbar


const Hero = () => {
  return <>
  <HeroSection id='hero'>  
    <Container>
      <MainHeading inverse >Encontre os melhores eventos e encontros conosco.</MainHeading>
      <HeroText>Nós ajudamos você a encontrar todos os seus eventos favoritos em um só lugar.</HeroText>

      <ButtonWrapper> 
        <Link to='sign-up'>
          <Button big>Encontre seu Evento</Button>
        </Link>
      </ButtonWrapper>
    </Container>
  </HeroSection>
  <Navbar />
  </>
}

export default Hero;