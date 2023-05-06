import React, { useEffect, useState } from 'react';
import { Container, Section } from '../../globalStyles'; // importando estilos globais
import { MasonryGrid, EventImageWrapper, Image, EventHeading } from './PictureStyles'; // importando estilos event
import { useInView } from 'react-intersection-observer'; // importando useInView para detectar quando elemento aparecer
import { useAnimation } from 'framer-motion'; // importando useanimation para criar animação
import Modal from '../Modal/Modal'; 
import {  Img, ImgWrapper } from '../Programacao/ProgramacaoStyles';
import { pictureData } from '../../data/PictureData'; // importando toda a estrutura do modal

export default function Picture() {
	
  const animacao = useAnimation();  // animacao recebe useAnimation
	
  const [showModal, setShowModal] = useState(false); // state do modal
	const [selectedImage, setSelectedImage] = useState(0);
	

  const { ref, inView } = useInView({ // inView estando visivel virá true - ref para referenciar qual elemento precisa ser visto
		
    threshold: 0.2, // elemento for visto 0.2 ou 20%
	
  });

  /*FUNCÃO QUE DA START A ANIMAÇÃO ALTERANDO COMPONENTES ( EventHeading, EventImageWrapper )
	 	DO ESTADO ANIMACAOINICIAL PARA O ESTADO ANIMACAO */ 	 
	useEffect(() => {
		if (inView) { // inView estando true ou seja elementos foram vistos por pelo menso 20%
			animacao.start({
				opacity: 1,
				scale: 1,
			});
		}
	}, [inView, animacao]); // QUANDO INVEW ESTIVER TRUE( FOR VISTO POR 20% DO ELEMENTO) DA START A FUNÇÃO

  // FUNÇÃO ANÔNIMA QUE ABRE O MODAL
	const handleClick = (index) => {
		setShowModal(true);
		setSelectedImage(index);
	};

	return (
		<>
			<Section>
				<Container  id='pictures'>

					<EventHeading
						initial={{ opacity: 0, scale: 0.3 }}
						transition={{ duration: 0.4 }}
						animate={animacao}
					>
						Fotos 
					</EventHeading>

					<MasonryGrid ref={ref}>
						{pictureData.map((item, index) => (
							<EventImageWrapper
								animate={animacao}
								initial={{
									opacity: 0,
									scale: 0.3,
								}}
								transition={{ duration: 0.8 }}
								className={item.class}
								key={index}
								onClick={() => handleClick(index)}
							>
								<Image src={item.img}></Image>
							</EventImageWrapper>
						))}
					</MasonryGrid>
				</Container>
			</Section>
      
			<Modal 
        show={showModal}  // VALUE DO MODAL COM STATE 
        onHide={() => setShowModal(false)} // alterando a state do modal para fecha-lo
      >
				
				<ImgWrapper>
					<Img src={pictureData[selectedImage].img} alt="image" />
				</ImgWrapper>
				

				
			</Modal>
		</>
	);
};

