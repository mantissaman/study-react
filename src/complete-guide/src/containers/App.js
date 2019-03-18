import React, { Component } from 'react';
import css from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 1, name: 'Atul', age: 9 },
      { id: 2, name: 'Priya', age: 38 },
      { id: 3, name: 'Diya', age: 9 },
      { id: 4, name: 'Neil', age: 5 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromprops', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nestState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[App.js] getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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

    // this.setState({
    //   persons:persons,
    //   chageCounter: this.state.changeCounter +1
    // });

    this.setState((prevState, props) =>{
     return { persons:persons,
      changeCounter: prevState.changeCounter +1
     }
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }
  toggleCockpitHandler = () => {
    this.setState({
      showCockpit: !this.state.showCockpit
    });
  }
  loginhandler = () => {

    this.setState({
      authenticated: true
    });
  }
  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
            isAuthenticated = {this.state.authenticated}
          /> 
      );
    }
    return (
        <Aux>
          <button onClick ={this.toggleCockpitHandler.bind(this)}>Remove Cockpit</button>
          {this.state.showCockpit ?
          <Cockpit 
            title ={this.props.appTitle}
            showPersons = {this.state.showPersons}
            personsLength = {this.state.persons.length}
            clicked = {this.togglePersonsHandler}
            login = {this.loginhandler}
          />: null}
          {persons}
        </Aux>
    );
  }
}

export default withClass(App, css.App);

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