import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Container, MainHeading } from '../../globalStyles' // importando os estilos globais
import { HeroSection, HeroText, ButtonWrapper } from './HeroStyles' // importando estilos da page
import Navbar from '../Navbar/Navbar'; // importando a navbar
import { useInView } from 'react-intersection-observer'
/* O hook 'useInView' retorna um array de dois valores: o primeiro é uma referência ao elemento que 
   está sendo rastreado e o segundo é um booleano que indica se o elemento está dentro do campo de 
   visão do usuário ou não.A principal finalidade do hook 'useInView' é permitir que você execute 
   ações quando um elemento estiver visível na tela */


const Hero = () => {

  const { ref, inView} = useInView({
    rootMargin: '-80px',
  })

  return <>
  <HeroSection 
    id='hero'
    ref={ref} // referenciando esta section com useInView
  >  
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
  <Navbar 
    hide={inView} // navbar recebe inView como props
  />
  </>
}

export default Hero;