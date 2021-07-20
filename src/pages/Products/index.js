import React from 'react';
import {InfoSection} from '../../components';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data';

const Products = () => {
	return (
		<>
			<InfoSection {...homeObjOne}></InfoSection>
			<InfoSection {...homeObjTwo}></InfoSection>
		</>
	);
};

export default Products;
