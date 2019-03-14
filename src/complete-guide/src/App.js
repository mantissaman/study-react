import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name: 'Atul', age: 43},
      {name: 'Priya', age: 38},
      {name: 'Diya', age: 9},
      {name: 'Neil', age: 5}
    ],
    otehrState: 'some other value'
  }
  switchNameHandler =(newName) =>{
    //console.log('was clicked')
    //DONT DO THIS: this.state.persons[0].name ='Atul Sharma';
    this.setState({
      persons : [
      {name: newName, age: 44},
      {name: 'Priya', age: 39},
      {name: 'Diya', age: 10},
      {name: 'Neil', age: 6}
    ]});
  }

  nameChangedHandler =(event) => {
    this.setState({
      persons : [
      {name: event.target.value, age: 44},
      {name: 'Priya', age: 39},
      {name: 'Diya', age: 10},
      {name: 'Neil', age: 6}
    ]});   
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am react App</h1>
        <button onClick={() => this.switchNameHandler('Big Kahuna')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.nameChangedHandler}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.switchNameHandler.bind(this, 'SpiderMan')}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );
  }
}

export default App;

/*
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personsState, setPersonsState] = useState({
      persons : [
        {name: 'Atul', age: 43},
        {name: 'Priya', age: 38},
        {name: 'Diya', age: 9},
        {name: 'Neil', age: 5}
      ]
    });
    const [otherState, setOtherState] = useState({otherState:"some other value"});

    const switchNameHandler =() =>{
      setPersonsState({
        persons : [
        {name: 'Atul', age: 44},
        {name: 'Priya', age: 39},
        {name: 'Diya', age: 10},
        {name: 'Neil', age: 6}
      ]
    });
    };

    return (
      <div className="App">
        <h1>Hi I am react App</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        <Person name={personsState.persons[3].name} age={personsState.persons[3].age}/>
      </div>
    );
}

export default app;

*/