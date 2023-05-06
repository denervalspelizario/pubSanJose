import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {
	FooterContainer,
	FooterLinksContainer,
	
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcon,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './FooterStyles';

import { websiteName } from '../../data/GlobalData';

function Footer() {
	return (
		<FooterContainer>
			<FooterLinksContainer>

				
				
				
				
			</FooterLinksContainer>
		
			<SocialMedia>
				<SocialMediaWrap>
					
					<SocialLogo to="/">
						<SocialIcon src="./assets/pubLogo.png" />
						{websiteName}
					</SocialLogo>
					
					<WebsiteRights>{websiteName} © 2021</WebsiteRights>

					<SocialIcons>
						<SocialIconLink href="/" target="_blank" aria-label="Facebook">
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Instagram">
							<FaInstagram />
						</SocialIconLink>
						<SocialIconLink href={'/'} target="_blank" aria-label="Youtube">
							<FaYoutube />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Twitter">
							<FaTwitter />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
							<FaLinkedin />
						</SocialIconLink>
					</SocialIcons>

				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
}

export default Footer;