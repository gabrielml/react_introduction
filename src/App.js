import React, { Component } from 'react';
import Greeting from '../src/Greeting/Greeting';
import Fruit from '../src/Fruits/Fruit';
import Food from '../src/Food/Food';

class App extends Component {
    render() {
        return (
          //<p> Hello World! </p>
          // <Greeting/>
          <div>
            <Fruit />
            <Fruit />
            <Fruit />
            <Food/>
          </div>
            );
    }
}

export default App;