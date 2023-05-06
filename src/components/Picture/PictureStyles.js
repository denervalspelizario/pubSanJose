import styled from 'styled-components';
import { motion } from 'framer-motion';
import {  irlandaOrange  } from "../../data/GlobalData"; // importando stilos globais

export const MasonryGrid = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-auto-rows: 200px;
	grid-auto-flow: dense;
	margin-top: 4rem;
	@media screen and (max-width: 550px) {
		display: flex;
		flex-direction: column;
		justify-content: center;

		> a > img {
			max-height: 300px;
			object-position: center;
		}
	}
`;
export const EventImageWrapper = styled(motion.div)`
	display: flex;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	&.wide {
		grid-column: span 2;
	}
	&.tall {
		grid-row: span 1;
	}
	

	&:before {
		background: rgb(0, 0, 0, 0.7);
		content: 'clique aqui';
		position: absolute;
		width: 100%;
		z-index: 1;
		justify-content: center;
		align-items: center;
		display: flex;
		height: 100%;
		transform: translateX(-100%);
		bottom: 0;
		color: white;
	}

	&:hover:before {
		transform: translateX(0);
		transition: transform 0.3s ease;
	}

	&:hover {
		> img {
			filter: blur(8px);
		}
	}
`;

export const EventHeading = styled(motion.h2)`
	font-size: clamp(3.5rem, 10vw, 10rem);
	margin-bottom: 2rem;
	color: ${irlandaOrange};
	width: 100%;
	-webkit-letter-spacing: 4px;
	-moz-letter-spacing: 4px;
	-ms-letter-spacing: 4px;
	letter-spacing: 4px;
	text-align: center;
	text-transform: capitalize;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 5px;
	object-position: bottom;
	display: inline-block;
	position: relative;
	opacity: 0.7;
`;
