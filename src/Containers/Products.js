import React from 'react';

import Product from '../Components/Product';
import {connect} from 'react-redux';

class Products extends React.Component {
	render() {
		const fruits = this.props.fruits.map(fruit => {
			return <Product
				key={fruit.key}
				name={fruit.name}
				cost={fruit.cost}
				deleted={() => this.props.deleted(fruit.key)} />
		})
		return (
			<div>
				{fruits}
				<p>{this.props.totalPrice} $</p>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		fruits: state.fruits,
		totalPrice: state.totalPrice
	}
}

const dispatchActions = dispatch => {
	return {
		deleted: (key) => dispatch({type: 'DELETE' , key: key})
	}
}

export default connect(mapStateToProps, dispatchActions)(Products);