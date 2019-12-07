import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.componet';


class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters: []
    };
    console.log('constructor');
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
    
    console.log('componentDidMount');
  }
 

  render(){
    console.log('render');
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />  
        
      </div>
    );
  }

}

export default App;
