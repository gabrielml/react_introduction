import React, { Component } from 'react';
import Greeting from '../src/Greeting/Greeting';
import Fruit from '../src/Fruits/Fruit';
import Food from '../src/Food/Food';

class App extends Component {
    state = {
      counter: 0
    }

    clickHandler = () => {
      const oldCount = this.state.counter;
      const newCount = oldCount + 1;

      this.setState({counter: newCount});
    }
    render() {
        return (
          <div>
            <button onClick = {this.clickHandler}>Clicked!</button>
            <p>{this.state.counter}</p>
          </div>
        );
    }
}

export default App;