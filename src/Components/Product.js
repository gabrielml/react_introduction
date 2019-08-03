import React from 'react';

const Product = (props) => (
	<div>
		<p>{props.name}: {props.cost} $</p>
		<button onClick={props.deleted}>Delete!</button>
	</div>
)

export default Product;