import React from 'react';
import './Fruit.css';

/**
 * @author Gabriel ML
 * @version 030719
 *
 * Class components can have **state**, while
 * funtional components cannot. That's why
 * functional components called **stateless** and
 * class components called **stateful**
 */
const Fruit = (props) => {
	return (
			// <p> This is a fruit and it cost $5</p>
		<div className="Fruit" onClick={props.clicked}>
			<p>This is a {props.name} and it costs {props.cost}</p>
		</div>
	)
}

export default Fruit;