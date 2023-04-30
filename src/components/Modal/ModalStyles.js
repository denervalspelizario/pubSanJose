import styled from 'styled-components';
import { MdClose } from 'react-icons/md'; // importando icon
import { motion } from 'framer-motion'; // importando mtion que vai dar a animação

export const Background = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	top: 0;
	left: 0;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
`;

export const ModalWrapper = styled(motion.div)`
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	padding: 40px 30px;
	background: #fff;
	color: #000;
	display: flex;
	position: relative;
	align-items: center;
	flex-direction: column;
	border-radius: 10px;

	img {
		max-height: 40vh;
	}
`;

export const CloseModalButton = styled(MdClose)`  // recendo o icon
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	width: 32px;
	height: 32px;
	padding: 0;
	z-index: 10;
`;
