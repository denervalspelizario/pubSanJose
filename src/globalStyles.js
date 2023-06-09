import styled,{createGlobalStyle} from "styled-components";
import {  irlandaGreen, irlandaOrange, irlandaWhite } from "./data/GlobalData"; // importando estilos globais  de globaldata

const GlobalStyle = createGlobalStyle` // será exportada la embaixo com export default GlobalStyle

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

`
;
export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 960px){ // ja adicionando responsividade no container
    
  }
`
;

export const Section = styled.div`
  color: #FFF;
  padding: 160px;
  background: ${({inverse})=> (inverse ? irlandaWhite : '#000')}; // se inverse for true sera #FFF se for false será #020305
`
;

export const MainHeading = styled.h1`
  font-size: clamp(2.0rem, 5vw, 3.5rem); // esse clamp é tipo uma media entre min e max ver em https://desenvolvimentoparaweb.com/css/textos-responsivos-com-css-clamp/
  margin-bottom: 2rem;
  color: ${({inverse}) => (inverse ? irlandaOrange : irlandaGreen)};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export const Button = styled.button` // botao 
  border-radius: 4px;
  background: none;
  white-space: space nowrap;
  padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};  // big estando true será  12px 64px senão sera 10px 20px
  font-weight: 600;
  color: #FFF;
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};  // big estando true será  12px 64px senão sera 10px 20px
  outline: none; // tirando a borda pelo outline
  border: 2px solid ${irlandaOrange};
  cursor: pointer;
  position: relative;
  overflow: hidden; // para ocultar oque passar
  transition: all 0.5s;

  // CRIAÇÃO DO EFEITO DE FLIP AO PASSAR O MOUSE TODA A ESTRUTURA DO BEFORE - HOVER:BEFORE - HOVER
  &:before {              
    background: ${irlandaOrange};
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 102%;
    height: 0%;
  }
  
  &:hover:before{
    height: 200%;
  }

  &:hover{
    z-index: 1;
    color: #121212;
    
  }

`;

export default GlobalStyle