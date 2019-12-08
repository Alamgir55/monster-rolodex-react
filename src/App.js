import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.componet';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
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
    const {monsters, searchField} = this.state;
    const filterMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='Type of Monster' handleChange={e => this.setState({searchField: e.target.value})} />
        <CardList monsters={filterMonster} />  
        
      </div>
    );
  }

}

export default App;
