import React from 'react';
import {InfoSection, Pricing} from '../../components';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data';

const HomePage = () => {
	return (
		<>
			<InfoSection {...homeObjOne}></InfoSection>
			<InfoSection {...homeObjTwo}></InfoSection>
			<InfoSection {...homeObjThree}></InfoSection>
			<Pricing />
			<InfoSection {...homeObjFour}></InfoSection>
		</>
	);
};

export default HomePage;
