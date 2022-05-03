import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField}
    })
  };

  render() {

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input 
        className="search-box" 
        type="search" 
        placeholder="search monsters"
        onChange={onSearchChange}/>
        {/* {filteredMonsters.map((monster) => {
            return <h1 key={monster.name}>{monster.name}</h1>
          })} */}
        {/* <CardList /> */}
      </div>
    );
  }
  
}

export default App;
