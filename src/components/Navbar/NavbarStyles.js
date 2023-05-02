import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import {Link as LinkScroll} from 'react-scroll';
/*O LinkScroll funciona permitindo que você defina um destino para o link, 
  que pode ser um ID de elemento ou um objeto com as propriedades de deslocamento e duração. 
  Quando o link é clicado, a página rola suavemente até o destino especificado.*/
import {  dark, irlandaGreen, irlandaOrange, irlandaWhite  } from "../../data/GlobalData"; // importando stilos globais

export const Nav = styled.nav`
	background: ${({ hide }) => (hide ? 'transparent' : irlandaGreen)};
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
`;

export const NavLogo = styled(Link)`
	color: ${irlandaOrange};
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.3rem;
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

	@media screen and (max-width: 960px) {
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

	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({ show }) => (show ? 1 : 0)};
		visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
		transform: translateY(${({ show }) => (show ? '0' : '-10px')});
		transition: opacity 0.5s ease;
		background-color: #071c2f;
	}

	> li:first-child {
		margin-left: auto;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	cursor: pointer;

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLinks = styled(LinkScroll)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	
	&.active { 
		text-shadow: 0 0 20px ${irlandaOrange}, 0 0 15px  ${irlandaOrange}, 0 0 10px  ${irlandaOrange};

		@media screen and (min-width: 960px) {
			border-bottom: 5px solid  ${irlandaOrange};
		}
	}
	&:hover {
		color: #c8c9d8;
		transition: all 0.3s ease;
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;


