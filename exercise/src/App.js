import React, { Component } from 'react';
import Person from './person';
import Lastname from './lastName';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10
    }
  }
  hand(){
    console.log('Handfunc');
    this.setState({
      count: this.state.count + 2
    })
  }
  render() {
    console.log('rendering');
    let name = ' samson';
    let name1 = ' che';
    let name2 = ' adam';
    let ln = 'Blankenship';
    return (
      <div>
        <Person Name={name}/>
        <Person Name={name1}/>
        <Person Name={name2}/>
        <Lastname last={ln}/>
        <button onClick={this.hand.bind(this)}>
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default App;
