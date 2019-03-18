import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import css from './Person.module.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
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
                {this.props.isAuth? <p>Autheinticated!</p>: <p>Please Log In</p>}
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