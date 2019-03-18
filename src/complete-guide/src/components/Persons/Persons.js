import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state){
  //     console.log('[Persons.js] getDerivedStateFromprops', props);
  //     return state;
  //   }
  // shouldComponentUpdate(nextProps, nestState) {
  //   console.log('\t**[Persons.js] shouldComponentUpdate');
  //   return nextProps.persons !== this.props.persons || nextProps.clicked !== this.props.clicked || nextProps.changed !== this.props.changed;
  // }



  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('\t**[Persons.js] getSnapshotBeforeUpdate');
    return { message: "Snapshot!" };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
    console.log('\t**[Persons.js] componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('\t**[Persons.js] componentWillUnmount');
  }
  render() {
    return this.props.persons.map((person, index) => {
      console.log('\t**[Persons.js] render');
      return <Person
        key={person.id}
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        isAuth = {this.props.isAuthenticated}
        changed={(event) => this.props.changed(event, person.id)} />
    });

  }
}



export default Persons;