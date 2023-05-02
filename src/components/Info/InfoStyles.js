import styled from 'styled-components';
import { Section } from '../../globalStyles';
import {  irlandaGreen, irlandaOrange, irlandaWhite } from "../../data/GlobalData"; 


export const InfoSection = styled(Section)`
	padding: 80px 10% ;
	

  @media screen and (max-width: 768px) {
		padding: 20px 0px 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
	}

	@media screen and (max-width: 311px) {
		padding: 90px 20px;
    
	}
`;
export const InfoRow = styled.div`
	display: grid;
	width: 90%;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 5rem;
	grid-auto-columns: 2rem;

	@media screen and (max-width: 768px) {
		display: flex;
    flex-direction: column;
    width: 100%;
  
    
	}
`;

export const InfoColumn = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 311px) {
		align-items: center;
	}
`;

export const Image = styled.div`
	height: 600px;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(2, 3, 5, 1)),
		url('./assets/pic2.jpg');
	background-size: cover;
	display: flex;
	align-items: center;
	object-fit: contain;

  @media screen and (max-width: 768px) {
    height: 300px;
	  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(2, 3, 5, 1)), linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(2, 3, 5, 1)),
		url('./assets/pic2.jpg');
	  background-size: cover;
	  display: flex;
	  align-items: center;
	  object-fit: contain;
	}

  @media screen and (max-width: 311px) {
		display: none;
	}
`;

export const InfoHeading = styled.h2`
	margin: 1rem 0 2rem;
	font-size: clamp(1.9rem, 6vw, 2.8rem);
	line-height: 1.1;
	font-weight: 600;
	color: ${({ inverse }) => (inverse ? irlandaWhite : irlandaOrange)};

	@media screen and (max-width: 311px) {
		text-align: center;
	}
`;

export const InfoDesc = styled.div`
	margin-bottom: 3rem;
	color: ${({ inverse }) => (inverse ? '#6a6a6a' : 'white')};
	font-size: 1.1rem;
	font-size: clamp(1rem, 2vw, 1.1rem);

	@media screen and (max-width: 768px) {
		text-align: center;
    
	}
`;

export const InfoWrapper = styled.div`
	padding-left: 4rem;
	padding-right: 2rem;
	padding-top: 2rem;
	max-width: 540px;
	@media screen and (max-width: 768px) {
		text-align: center;
    
	}
`;

export const BottomLine = styled.div`
	display: flex;
	gap: 4rem;
	@media screen and (max-width: 768px) {
		justify-content: center;
		align-items: center;
    
	}
  @media screen and (max-width: 450px) {
		justify-content: center;
		align-items: center;
    flex-direction: column;
	}
`;

export const InfoNumber = styled.div`
	font-weight: 700;
	font-size: 1.3rem;
	letter-spacing: 0.04rem;
  @media screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const InfoText = styled.div`
	font-weight: 500;
	margin-top: 0.4rem;
	color: ${irlandaOrange};
`;
