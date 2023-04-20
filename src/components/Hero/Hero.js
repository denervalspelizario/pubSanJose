import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Container, MainHeading } from '../../globalStyles' // importando os estilos globais
import { HeroSection, HeroText, ButtonWrapper } from './HeroStyles' // importando estilos da page


const Hero = () => {

  {/*Nunca esquecer que o componente tem que estar ao  */}
  return <HeroSection id='hero'>  
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

  
}

export default Hero;