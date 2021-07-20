import React, {useState, useEffect} from 'react';
import {FaTimes, FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {Button} from '../../globalStyles';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	HamburgerMenu,
	NavMenu,
	NavItem,
	NavLinks,
	NavItemBtn,
	NavBtnLink,
} from './Navbar.elements';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(false);

	const handleClick = () => setClick(!click);

	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(true);
		} else {
			setButton(false);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<>
			<IconContext.Provider value={{color: '#fff'}}>
				<Nav>
					<NavbarContainer>
						<NavLogo to='/' onClick={closeMobileMenu}>
							<NavIcon />
							PLUS-ULTRA
						</NavLogo>

						<HamburgerMenu onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</HamburgerMenu>

						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<NavLinks to='/'>Home</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to='/services'>Services</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to='/products'>Products</NavLinks>
							</NavItem>
							<NavItemBtn>
								{button ? (
									<NavBtnLink to='/sign-up'>
										<Button primary>SIGN UP</Button>
									</NavBtnLink>
								) : (
									<NavBtnLink to='/sign-up'>
										<Button onClick={showButton} fontbig primary>
											SIGN UP
										</Button>
									</NavBtnLink>
								)}
							</NavItemBtn>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
