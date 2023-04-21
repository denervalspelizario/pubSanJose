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
import { animateScroll as scroll } from 'react-scroll'  // a funcao animatedScrool será apelidada scroll
import { websiteName } from '../../data/GlobalData'
import { navbarData } from '../../data/NavbarData.js'; 

function Navbar({ hide }){

  const [show, setShow] = useState(false);

  return <Nav hide={hide}>
    <NavbarContainer>
      <NavLogo to='/' onClick={scroll.scrollToTop}>
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
          <NavMenu hide={hide} show={show}>
            {navbarData.map((el, index) => (
              <NavItem key={index}>
                <NavLinks 
                  spy={true}
                  duration={500}
                  smooth={true}
                  exact='true'
                  offset={-79}
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