import React from 'react';

/**
 * @author Gabriel ML
 * @version 030719
 *
 * _Class components_ can have **state**, while
 * _functional components_ cannot. That's why
 * functional components called **stateless** and
 * class components called **stateful**.
 */
class Food extends React.Component {
	render() {
		return (
			<p>This is a food and it costs $10</p>
		)
	}
}

export default Food;