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
} from './FeaturesStyles'; // IMPORTANDO COMPONENTES STYLED
import { featuresData } from '../../data/FeaturesData';
import { useAnimation } from 'framer-motion'; // IMPORTANDO USEANIMATIOM PARA FAZER ANIMAÇÃO NA TELA
import { useInView } from 'react-intersection-observer';

function Features({ id }){ 
	
  const animacaoInicial = {  // funcao que indica o inicio da FeatureCollumn  
		scale: 0.2,
		y: 40,
		opacity: 0,
	};

	const animacao = useAnimation();  // animacao recebe as propriedades de useAnimation

	const { ref, inView } = useInView({  // inView estando visivel virá true - ref para referenciar qual elemento precisa ser visto
		threshold: 0.4, // elemento for visto por pelo menos 40% 
	});
  /* O threshold se refere à porcentagem da altura do elemento que deve estar visível na janela do navegador antes 
     que seja considerado que o elemento está em vista. Neste caso, foi definido como 40%, 
     o que significa que se pelo menos 40% do elemento estiver visível na janela do navegador, é considerado que está em vista.
  */

	useEffect(() => {
		if (inView) { // quando inView estiver true(elemento foi visto) ou seja rolei até a parte da pagina inicia a animação
			animacao.start({ // start animação
				scale: 1,
				y: 0,
				opacity: 1,
			});
		}
	}, [inView, animacao]);

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
					<FeatureTitle>{featuresData.title}</FeatureTitle>
					<FeatureMainText>{featuresData.text}</FeatureMainText>
				</FeatureTextWrapper>
				<FeatureWrapper>
					{featuresData.content.map((el, index) => ( // renderizando todos os objetos de content seguindo a estrutura
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

export default Features;
