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
      ]
    }

    clickHandler = () => {
      const oldCount = this.state.counter;
      const newCount = oldCount + 1;

      this.setState({counter: newCount});
    }
    render() {
        return (
          <div>
            <Fruit name = {this.state.fruits[0].name} cost = {this.state.fruits[0].cost} />
            <Fruit name = {this.state.fruits[1].name} cost = {this.state.fruits[1].cost} />
            <Fruit name = {this.state.fruits[2].name} cost = {this.state.fruits[2].cost} />
          </div>
        );
    }
}

export default App;