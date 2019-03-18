import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import css from './Person.module.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }
    render() {
        // return (
        //     <div className={css.Person}>
        //         <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" onChange={this.props.changed} value={this.props.name}/>
        //     </div>
        // );

        // return (
        //     <React.Fragment>
        //         <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
        //         <p>{this.props.children}</p>
        //         <input type="text" onChange={this.props.changed} value={this.props.name}/>
        //     </React.Fragment>
        // );
        return (
            <Aux>

               { this.context.authenticated? <p>Authenticated!</p>: <p>Please Log In</p>}

               
                
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    //ref={(inputEl) => { this.inputElement = inputEl}}
                    ref= {this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changes: PropTypes.func
};

export default withClass(Person, css.Person);