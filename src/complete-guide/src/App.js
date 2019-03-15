import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Atul', age: 43 },
      { id: 2, name: 'Priya', age: 38 },
      { id: 3, name: 'Diya', age: 9 },
      { id: 4, name: 'Neil', age: 5 }
    ],
    showPersons: false
  }

  deletePersonHandler = (index) =>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons:persons
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return id === p.id;
    });

    const person = {...this.state.persons[personIndex]};
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons:persons
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid white',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key = {person.id}
                click ={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed = {(event)=> this.nameChangedHandler(event, person.id)} />
            })
          }
        </div>
      );
      style.backgroundColor ='red';
      style[':hover'] =  {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }
    let classes= [];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi I am react App</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button style={style} onClick={this.togglePersonsHandler}>{this.state.showPersons ? 'Hide Persons' : 'Show Persons'}</button>
          {persons}
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