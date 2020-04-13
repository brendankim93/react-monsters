import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      isOpen: false
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }
  render() {
    const { monsters, searchField, isOpen } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    const handleClick = e => {
      this.setState({ isOpen: true });
    }
    const handleClose = e => {
      this.setState({ isOpen: false });
    }
      return (
        <div className='App'>
          <h1>Monsters Rolodex</h1>
          <SearchBox 
          placeholder='search monsters'
          handleChange={e => this.setState({ searchField: e.target.value })}
          />
          <CardList monsters={filteredMonsters} handleClick={handleClick} handleClose={handleClose} isOpen={isOpen} />
        </div>
      );
  }
}

export default App;
