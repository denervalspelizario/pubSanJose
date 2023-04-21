import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import {Link as LinkScroll} from 'react-scroll';
import {  backgroundColor } from "../../data/GlobalData"; // importando stilos globais

export const Nav = styled.nav`
  background-color: ${({hide}) => (hide?'transparent': backgroundColor)};
  margin-top: -80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;

`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;
  height: 80px;
`

export const NavLogo = styled(Link)`
  color: #FFF;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  z-index: 50;

`;

export const NavIcon = styled.img`
  margin-right: 1rem;
  width: 3rem;
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;

  @media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 960px){
    
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 30%;
    top: 0;
    left: 0;
    opacity: ${({ click }) => (click ? 1 : 0)};
    visibility: ${({ click }) => (click ? 'visible' : 'hidem')};
    transform: translateY(${({ click }) => (click ? '0' : '-10px')});
    transition: opacity 0.5s ease;
    background-color: #071c2f;
  }
  > li:first-child{
    margin-left: auto;
  }

`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;
  @media screen and (max-width: 960px){
    width: 100%;

    &:hover {
      border:none
    }
  }

`;


export const NavLinks = styled(LinkScroll)`
  color: #FFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0%.5rem 1rem;
  height: 100%;
  &.active {
    text-shadow: 0 0 20px #aa0000, 0 0 15px #aa0000, 0 0 10px #aa0000;

    @media screen and (min-width: 960px){
      border-bottom: 2px solid red
    }
  }
  &:hover {
    color: #c8c9d8;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }

`


