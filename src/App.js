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
            <Fruit name='lemon' cost='$2' />
            <Fruit name='mango' cost='$3'/>
            <Fruit name='banana' />
            <Food name='meat' cost='$7'/>
          </div>
            );
    }
}

export default App;