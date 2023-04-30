import React, { useEffect, useState } from 'react';
import { Container } from '../../globalStyles'; // importando estilos globais
import {
	ContentSec,
	ContentRow,
	TextWrapper,
	TopLine,
	ContentHeading,
	ContentButton,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from './ContentStyles'; // importando estilos
import { useInView } from 'react-intersection-observer'; // importando useInView para detectar quando elemento aparecer
import { useAnimation } from 'framer-motion'; // importando useanimation para criar animação
import ReactModal from 'react-modal';



export default function Content ({ 
  primary,  // props que serão  preenchidas com os dados la do database
  topLine, 
  headline, 
  description,
	buttonLabel, 
  img, 
  alt, 
  inverse, 
  reverse, 
  bigImage,
  })  

{
	const [showModal, setShowModal] = useState(false); // state do modal

	const animacaoInicial = { opacity: 0, scale: 0.3 }; // objeto que indica estado inicial de animação

	const transition = { delay: 0.3, duration: 0.6 }; // objeto com tempo de transição de animação
	
  const animacao = useAnimation(); // animacao recebe useAnimation

	const { ref, inView } = useInView({  // inView estando visivel virá true - ref para referenciar qual elemento precisa ser visto
		
    threshold: 0.2, // elemento for visto 0.2 ou 20%
	
  });

  /*FUNCÃO QUE DA START A ANIMAÇÃO ALTERANDO COMPONENTES (TopLine, ContentHeading, Subtitle, ContentButton, ContentColumn )
	 	DO ESTADO ANIMACAOINICIAL PARA O ESTADO ANIMACAO */ 	 
	useEffect(() => {
		if (inView) {  // inView estando true ou seja elementos foram vistos por pelo menso 20%
			animacao.start({
				opacity: 1,
				scale: 1,
			});

			return;
		}

		animacao.start({ // se inView estiver false some
			opacity: 0,
			scale: 0.3,
		});
	}, [inView, animacao]); // QUANDO INVEW ESTIVER TRUE( FOR VISTO POR 40% DO ELEMENTO) DA START A FUNÇÃO

	return (
		<>
			<ContentSec 
        inverse={inverse} // deixando inverse como true inicialmente
        ref={ref} // referenciando elemento para usar como parametro para o inView
      >
				<Container>
					<ContentRow 
            reverse={reverse} // receberá como props o reverse la do database 
          > 
						<ContentColumn>
							<TextWrapper>

								<TopLine
									initial={animacaoInicial}
									transition={{ ...transition, delay: 0.5 }}
									animate={animacao}
								>
									{topLine.text}
								</TopLine>

								<ContentHeading
									initial={animacaoInicial}
									transition={transition}
									animate={animacao}
									inverse={inverse} // receberá como props o reverse la do database 
								>
									{headline}
								</ContentHeading>

								<Subtitle
									initial={animacaoInicial}
									transition={{ ...transition, delay: 0.7 }}
									animate={animacao}
									inverse={inverse} // receberá como props o reverse la do database 
								>
									{description}
								</Subtitle>

								<ContentButton
									initial={animacaoInicial}
									transition={{ ...transition, delay: 1 }}
									animate={animacao}
									inverse={inverse} // receberá como props o reverse la do database 
									primary={primary} // receberá como props o primary la do database 
									onClick={() => {  // ao clicar altera o state do modal para true e abre o modal
										setShowModal(true);
									}}
								>
									{buttonLabel}
								</ContentButton>
							
              </TextWrapper>
						</ContentColumn>
						
            <ContentColumn
							initial={animacaoInicial}
							transition={transition}
							animate={animacao}
							bigImage={bigImage} // receberá como props o bigImage la do database 
						>
							<ImgWrapper>
								<Img
									src={img}
									alt={alt}
									initial={{ rotate: 2 }}
									whileHover={{ rotate: 0, scale: 1.02 }}
									transition={{ duration: 0.5 }}
								/>
							</ImgWrapper>
						</ContentColumn>
					</ContentRow>
				</Container>
			</ContentSec>

			<ReactModal
        show={showModal} // state do modal  
        onHide={() => setShowModal(false)} // alterando a state do modal para fecha-lo
      >
				<ContentHeading inverse={inverse}>
          {headline}
        </ContentHeading>
				<ImgWrapper>
					<Img src={img} alt={alt} />
				</ImgWrapper>
				<Subtitle inverse={inverse}>
          {description}
        </Subtitle>
				<ContentButton 
          inverse={inverse} // receberá como props o reverse la do database 
          primary={primary} // receberá como props o primary la do database 
        >
					Compre aqui seu tickets
				</ContentButton>
			</ReactModal>
		</>
	);
};


