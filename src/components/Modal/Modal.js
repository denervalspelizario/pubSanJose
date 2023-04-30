import React, { useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
/*  a função AnimatePresence da biblioteca Frame Motion é usada para criar animações de entrada e saída 
    de componentes React, melhorando a experiência do usuário e adicionando dinamismo às páginas da web.
*/

import { Background, CloseModalButton, ModalWrapper } from './ModalStyles';

const Modal = ({ show, onHide, children }) => { // modal recebendo props show, onHide e children
	
  const modalReferencia = useRef(); //  modalReferencia recebe referenciação

  //FUNCAO PARA FECHAR O MODAL
	const closeModal = (evento) => {   
		if (modalReferencia.current === evento.target) { // se item referenciado for clicado(.target) acionda o onHide que oculta  
			onHide();                                      // resumindo fecha um modal quando o usuário clica em uma parte fora do conteúdo do modal.
		}
	};

	const backgroundVariants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.4,
			},
		},
	};

	const modalVariants = {
		initial: {
			opacity: 0,
			y: 200,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				type: 'spring',
				stiffness: 100,
			},
		},
		exit: {
			opacity: 0,
			y: -200,
		},
	};

	useEffect(() => {
		if (show) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
	}, [show]);

	return (
		<AnimatePresence>
			{show && (
				<Background
					variants={backgroundVariants}
					animate="animate"
					initial="initial"
					onClick={closeModal}
					ref={modalReferencia}
					exit={{
						opacity: 0,
					}}
				>
					<ModalWrapper
						variants={modalVariants}
						animate="animate"
						initial="initial"
						exit={{
							opacity: 0,
							y: '-100vh',
						}}
					>
						{children}
						<CloseModalButton aria-label="Close modal" onClick={onHide} />
					</ModalWrapper>
				</Background>
			)}
		</AnimatePresence>
	);
};

export default Modal;
