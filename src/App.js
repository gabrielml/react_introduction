import React, { Component } from 'react';
import Greeting from '../src/Greeting/Greeting';
import Fruit from '../src/Fruits/Fruit';
import Food from '../src/Food/Food';

class App extends Component {
    state = {
      fruits: [
        {name: 'lemon' , cost: '2'},
        {name: 'mango' , cost: '3'},
        {name: 'banana' , cost: '4'}
      ],
      clickedCount: 0
    }

    clickHandler = () => {
      const oldCount = this.state.counter;
      const newCount = oldCount + 1;

      this.setState({counter: newCount});
    }

    itemClicked = () => {
      const oldCount = this.state.clickedCount;
      const newCount = oldCount + 1;

      this.setState({clickedCount: newCount});
    }

    render() {
        const style = {
          backgroundColor: 'lightblue',
          textAlign: 'center'
        }
        return (
          <div>
            {this.state.fruits.map((element, index) => {
              return <Fruit key={index} name={element.name} cost={element.cost} clicked={this.itemClicked} />
            })}
            <p style={style}>clickedCount = {this.state.clickedCount}</p>
          </div>
        );
    }
}

export default App;