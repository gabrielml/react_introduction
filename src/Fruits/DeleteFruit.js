import React from 'react';

const DeleteFruit = (props) => {
	return(
		<div className='Fruit DeleteFruit'>
			<input type='text' onChange={props.changed} placeholder="Search..." />
			<button onClick={props.deleted}>Delete!</button>
			<p>{props.text}</p>
		</div>
	);
}

export default DeleteFruit;