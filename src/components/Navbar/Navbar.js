import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
  Nav,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavbarContainer,
  NavItem,
  NavIcon
} from './NavbarStyles.js'
import { animateScroll as scroll } from 'react-scroll'  // a funcao animatedScrool para scrollar será apelidada scroll
import { websiteName } from '../../data/GlobalData' // importando dado do globaldata
import { navbarData } from '../../data/NavbarData.js'; 

function Navbar({ hide }){

  const [show, setShow] = useState(false);

  return <Nav 
      hide={hide}  // componente Nav com hide true olhar o navbarStyles
    >
    <NavbarContainer>
      <NavLogo to='/' 
        onClick={scroll.scrollToTop} // ao clicar chama funcao scrollToTop que joga rola pagina para o topo
      >
        <NavIcon  src='./assets/logo.svg' />
        {websiteName} 
      </NavLogo>

      {!hide && (
        <>
          <IconContext.Provider value={{color: 'white'}}>
            <MobileIcon onClick={() => setShow(!show)}> 
              {show? <FaTimes/> : <CgMenuRight/>} 
            </MobileIcon>
          </IconContext.Provider>
          <NavMenu 
            hide={hide}  // componente NavMenu com hide true olhar o navbarStyles
            show={show}  // recebendo valor de state que inicia como false
          >
            {navbarData.map((el, index) => ( // renderizando todos objetos de array de navbarData
                                             // index = key e el = dados do objeto 
              <NavItem 
                key={index}  // recendo uma key de cada objeto da array
              >
                <NavLinks 
                  spy={true}
                  duration={500}
                  smooth={true}
                  exact='true'
                  offset={-78}
                  onClick={() => setShow(false)}
                  to={el.to}
                >
                  {el.text}
                </NavLinks>  
              </NavItem>  
            ))}
          </NavMenu>
        </>
      )}
    </NavbarContainer>
  </Nav>
  
}

export default Navbar;