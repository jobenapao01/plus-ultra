import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Footer, Navbar, ScrollToTop} from './components';
import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import Services from './pages/Services';
import SignUp from './pages/SignUp';

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<ScrollToTop />
			<Navbar />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/services' component={Services} />
				<Route exact path='/products' component={Products} />
				<Route exact path='/sign-up' component={SignUp} />
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
