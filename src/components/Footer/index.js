import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa';
import {Button} from '../../globalStyles';
import {
	FooterContainer,
	FooterSubscription,
	FooterSubHeading,
	FooterSubText,
	Form,
	FormInput,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinksItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrapper,
	SocialLogo,
	SocialIcon,
	SocialIcons,
	SocialIconLink,
	WebsiteRights,
} from './Footer.elements';

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<FooterSubscription>
					<FooterSubHeading>
						Join our exclusive membership to receive the latest news and trends.
					</FooterSubHeading>
					<FooterSubText>You can subscribe any time.</FooterSubText>
					<Form>
						<FormInput name='email' placeholder='Your email' />
						<Button fontbig>Subscribe</Button>
					</Form>
				</FooterSubscription>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinksItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to='/sign-up'>How it works</FooterLink>
							<FooterLink to='/'>Testimonials</FooterLink>
							<FooterLink to='/'>Careers</FooterLink>
							<FooterLink to='/'>Investors</FooterLink>
							<FooterLink to='/'>Terms of Service</FooterLink>
						</FooterLinksItems>
						<FooterLinksItems>
							<FooterLinkTitle>Contact Us</FooterLinkTitle>
							<FooterLink to='/sign-up'>Contact</FooterLink>
							<FooterLink to='/'>Support</FooterLink>
							<FooterLink to='/'>Destinations</FooterLink>
							<FooterLink to='/'>Sponsorships</FooterLink>
						</FooterLinksItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinksItems>
							<FooterLinkTitle>Videos</FooterLinkTitle>
							<FooterLink to='/sign-up'>Submit Video</FooterLink>
							<FooterLink to='/'>Ambassadors</FooterLink>
							<FooterLink to='/'>Agency</FooterLink>
							<FooterLink to='/'>Influencers</FooterLink>
						</FooterLinksItems>
						<FooterLinksItems>
							<FooterLinkTitle>Social Media</FooterLinkTitle>
							<FooterLink to='/sign-up'>Instagram</FooterLink>
							<FooterLink to='/'>Facebook</FooterLink>
							<FooterLink to='/'>Youtube</FooterLink>
							<FooterLink to='/'>Twitter</FooterLink>
							<FooterLink to='/'>LinkedIn</FooterLink>
						</FooterLinksItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>

				<SocialMedia>
					<SocialMediaWrapper>
						<SocialLogo to='/'>
							<SocialIcon />
							PLUS-ULTRA
						</SocialLogo>
						<WebsiteRights>PLUS-ULTRA 2020</WebsiteRights>

						<SocialIcons>
							<SocialIconLink href='/' target='_blank' aria-label='Facebook'>
								<FaFacebook />
							</SocialIconLink>

							<SocialIconLink href='/' target='_blank' aria-label='Instagram'>
								<FaInstagram />
							</SocialIconLink>

							<SocialIconLink href='/' target='_blank' aria-label='Twitter'>
								<FaTwitter />
							</SocialIconLink>

							<SocialIconLink href='/' target='_blank' aria-label='Youtube'>
								<FaYoutube />
							</SocialIconLink>

							<SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrapper>
				</SocialMedia>
			</FooterContainer>
		</>
	);
};

export default Footer;
