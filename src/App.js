import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const peoples = [
  {id:1,'name':'David', 'age':21},
  {id:2,'name':'Luis', 'age':25},
  {id:3,'name':'Pedro', 'age':32},
  {id:4,'name':'Mariana', 'age':45},
  {id:5,'name':'Juan', 'age':18},
  {id:6,'name':'Luisa', 'age':22}
];

function searchingFor(term){
  return function(x){
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      State_peoples : peoples,
      term : ''
    }
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event){
    this.setState({term: event.target.value})
  }

    render() {
      const {term} = this.state;
        return (
          <div className = "App" >
            <header className = "App-header" >
            <img src = { logo }
            className = "App-logo"alt = "logo" / >
            <h1 className = "App-title" > Welcome to React < /h1>
            </header>
            <form className="formFilter">
              <input type="text" placeholder="Filter by name" onChange={this.searchHandler} value={term} />
            </form>
            {
            this.state.State_peoples.filter(searchingFor(this.state.term)).map(function(people){
              return(
                <div key={people.id}>
                  <h4>{people.name} - {people.age}</h4>
                </div>
              )
            })
            }
          </div>
        );
    }
}

export default App;
