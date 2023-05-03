import React from 'react';

import { GiPartyPopper } from 'react-icons/gi'; // importando icons
import { IoMdMicrophone }  from 'react-icons/io';
import { BiParty } from 'react-icons/bi'
const iconStyle = (Icon) => <Icon size="3rem" color="red" />;

export const eventosData = {
	title: "Eventos",
	text: "Pub sanJose possui uma estrutura completa para você realizar o seu evento empresarial ou social. Você conta com um espaço reservado só para o seu evento e conta com todo a atendimento e cardápio que o Pub oferece para todos os clientes. Não deixe de consultar-nos, faça seu orçamento e tenha um diferencial no seu evento para ser sempre lembrado!",
	content: [
		{
			name:  "Confraternização Empresarial",
			description: "Conheça pessoas maravilhosas que compartilham seus interesses e faça amigos.",
			icon: iconStyle(BiParty),
			image: './assets/features/icon3.svg',
		},
		{
			name: 'Faça conosco seu aniversário',
			description: "Aqui você encontra o espaço perfeito para as comemorações da sua vida. ",
			icon: iconStyle(GiPartyPopper),
			image: './assets/features/icon2.svg',
		},
		{
			name: 'Estrutura para receber shows',
			description: "Nós ajudamos você a tornar os eventos mais divertidos.",
			icon: iconStyle(IoMdMicrophone),
			image: './assets/features/icon1.svg',
		},
	],
};
