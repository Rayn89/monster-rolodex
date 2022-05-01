import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
    console.log('constructor')
  }
  
  componentDidMount() {
    console.log('compDidMount')
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }
    ))
  }

  render() {
    console.log('Render')
    return (
      <div className="App">
        <input 
        className="search-box" 
        type="search" 
        placeholder="search monsters"
        onChange={(event) => this.state.monsters.filter((ele) => ele.includes(event.target.value))}/>
        {this.state.monsters.map((monster) => {
            return <h1 key={monster.name}>{monster.name}</h1>
          })}
      </div>
    );
  }
  
}

export default App;
