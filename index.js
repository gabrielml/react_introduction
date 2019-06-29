class Human extends React.Component {
	render() {
		return (
			<div>
				<p>Hello World!</p>
			</div>
		);
	}
}

ReactDOM.render(
	<Human/>,
	document.getElementById('root')
);