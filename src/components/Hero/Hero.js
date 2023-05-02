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

  const { ref, inView} = useInView({  //  QUANDO A MARGIN ESTIVER -80PX INVIEW FICARÁ TRUE
    rootMargin: '-80px',
  })

  return (
    <>
    <HeroSection id='hero'ref={ref} >  
    <Container>
      <MainHeading inverse >Venha curtir o melhor happy hour da vila Madalena</MainHeading>
      <HeroText>Ao som de pop rock e rock clássico um pub com ótimas opções gastronômicas, premiado o melhor chopp pela veja abc e uma ampla carta de cervejas especiais..</HeroText>

      <ButtonWrapper> 
        <Link to='sign-up'>
          <Button big>Acesse o cardápio</Button>
        </Link>
      </ButtonWrapper>
    </Container>
  </HeroSection>
  <Navbar 
    hide={inView} // navbar recebe inView como props OLHAR FUNCAO ACIMA 
  />
  </>
  )
}

export default Hero;