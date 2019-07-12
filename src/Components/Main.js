import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Orders from './Orders';

const Main = () => {
	return (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/products' component={Products}/>
			<Route path='/orders' render={() => <Orders totalPrice='$12'/>}/>
		</Switch>
	</main>
	);
}

export default Main;