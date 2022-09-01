import './App.css';
import React, { Component } from 'react';
import { CardList } from './component/card-list-comp/card-list-comp';
import { SearchBox } from './../src/component/Search-Box-comp/Search-Box-comp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchBoxField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((user) => {
        this.setState({ monster: user });
      });
  }

  handleHandler = (e) => {
    console.log(e.target.value);
    this.setState({ searchBoxField: e.target.value });
  };

  render() {
    const { monster, searchBoxField } = this.state;
    const filterCard = monster.filter((monsterData) => {
      return monsterData.name
        .toLowerCase()
        .includes(searchBoxField.toLowerCase());
    });
    if (filterCard.length > 0) {
      return (
        <div className="App">
          <h1 className="heading"> Monster Rolodex</h1>
          <SearchBox
            placeHolder={'Search a monster'}
            handHandler={this.handleHandler}
          />
          <CardList monster={filterCard} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1 className="heading"> Monster Rolodex</h1>
          <SearchBox
            placeHolder={'Search a monster'}
            handHandler={(e) =>
              this.setState({ searchBoxField: e.target.value })
            }
          />
          <h1 style={{ color: 'red' }}> hoMONSTER -Not Found... </h1>
        </div>
      );
    }
  }
}

export default App;

// default react App code logo
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
