import React, { useEffect } from 'react';
import { Container } from '../../globalStyles';
import {
	FeatureText,
	FeatureSection,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureImage,
	FeatureTextWrapper,
	FeatureMainText,
} from './EventosStyles.js'; // IMPORTANDO COMPONENTES STYLED
import { eventosData } from '../../data/EventosData';
import { useAnimation } from 'framer-motion'; // IMPORTANDO USEANIMATIOM PARA FAZER ANIMAÇÃO NA TELA
import { useInView } from 'react-intersection-observer';

export default function Eventos({ id }){ 
	
  const animacaoInicial = {  // // objeto que indica estado inicial de animação
		scale: 0.2, // scala inical  0.2 = 20% 
		
		y: 40, //define a posição vertical inicial do elemento, no caso, seu valor é definido como 40,  
					 //ou seja inicialmente exibido 40 pixels abaixo da sua posição original.
		
		opacity: 0, // com 0 de opacidade iniciara invisivel
	};

	const animacao = useAnimation();  // animacao recebe as propriedades de useAnimation

	const { ref, inView } = useInView({  // inView estando visivel virá true - ref para referenciar qual elemento precisa ser visto
		threshold: 0.4, // elemento for visto por pelo menos 40% 
	});
  /* O threshold se refere à porcentagem da altura do elemento que deve estar visível na janela do navegador antes 
     que seja considerado que o elemento está em vista. Neste caso, foi definido como 40%, 
     o que significa que se pelo menos 40% do elemento estiver visível na janela do navegador, é considerado que está em vista.
  */


	/*FUNCÃO QUE DA START A ANIMAÇÃO ALTERANDO COMPONENTES (FEATURETEXTWRAPPER E FEATURECOLUM)
	 	DO ESTADO ANIMACAOINICIAL PARA O ESTADO ANIMACAO */ 	 
	useEffect(() => {
		if (inView) { //  // inView estando true ou seja elementos foram vistos por pelo menos 40%
			animacao.start({ // start animação
				scale: 1, // tamanho 100%
				y: 0, // posiçao original
				opacity: 1, // 100% de opacidade
			});
			return;
		}

		animacao.start({ // // se inView estiver false some
			scale: 0.2, 
			y: 0, 
			opacity: 0, 
		});
	}, [inView, animacao]); // QUANDO INVEW ESTIVER TRUE( FOR VISTO POR 40% DO ELEMENTO) DA START A FUNÇÃO




	return (
		<FeatureSection id={id}>
			<Container 
        ref={ref} // referenciando a div ou seja E ESTA DIV QUE SE FOR VISTA 40% SERÁ STARTADA ANIMAÇÃO
      >
				<FeatureTextWrapper
					initial={animacaoInicial} //  div recebe scala inicial da animacao
					animate={animacao} // div recebendo animacao que será ativada assim que inView ficar true
					transition={{ duration: 0.3 }} // duracao da animação
				>
					<FeatureTitle>{eventosData.title}</FeatureTitle>
					<FeatureMainText>{eventosData.text}</FeatureMainText>
				</FeatureTextWrapper>
				<FeatureWrapper>
					{eventosData.content.map((el, index) => ( // renderizando todos os objetos de content seguindo a estrutura
						<FeatureColumn
							initial={animacaoInicial} //  div recebe scala inicial da animacao
							animate={animacao} // div recebendo animacao que será ativada assim que inView ficar true
							transition={{ duration: 0.7 + index * 0.1 }} // duracao da animação
							key={index} // indicando a key
						>
							<FeatureImageWrapper>
								<FeatureImage src={el.image} alt="Recursos" />
							</FeatureImageWrapper>
							<FeatureName>
								{el.name}
							</FeatureName>
							<FeatureText>
								{el.description}
							</FeatureText>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</Container>
		</FeatureSection>
	);
};


