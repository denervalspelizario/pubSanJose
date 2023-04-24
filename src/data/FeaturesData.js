import React from 'react';

import { GiPartyFlags, GiMicrophone } from 'react-icons/gi'; // importando icons
import { TiGroupOutline } from 'react-icons/ti';
const iconStyle = (Icon) => <Icon size="3rem" color="red" />;

export const featuresData = {
	title: "Nosso Programas",
	text: "Nós somos uma empresa de eventos em rápida expansão na Europa e na América do Norte. Agora em seu 11º ano, a Ezent cresceu para mais de 2.000 eventos anuais, o que a torna uma das plataformas de publicidade de eventos mais famosas.",
	content: [
		{
			name:  "Rede de Relacionamentos",
			description: "Conheça pessoas maravilhosas que compartilham seus interesses e faça amigos.",
			icon: iconStyle(TiGroupOutline),
			image: './assets/features/Network.svg',
		},
		{
			name: 'Os Melhores Eventos',
			description: "Nós organizamos e vendemos ingressos para os eventos mais desejados.",
			icon: iconStyle(GiMicrophone),
			image: './assets/features/Speech.svg',
		},
		{
			name: 'Diversão',
			description: "Nós ajudamos você a tornar os eventos mais divertidos.",
			icon: iconStyle(GiPartyFlags),
			image: './assets/features/Fun.svg',
		},
	],
};
