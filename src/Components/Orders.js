import React from 'react';

const Orders = (props) => {
	return (
		<div>
			<p>Lemon: 0</p>
			<p>Banana: 0</p>
			<p>Mango: 0</p>
			<p>Total price: {props.totalPrice} </p>
		</div>
	)
}

export default Orders;