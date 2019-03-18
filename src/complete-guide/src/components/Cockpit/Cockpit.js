import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);


    useEffect(() => {
        console.log("[Cockpit.js] useEffect");

        toggleBtnRef.current.click();
        return () => {
            console.log("[Cockpit.js] clean up");
        };
    }, []);



    useEffect(() => {
        console.log("[Cockpit.js] useEffect");

        setTimeout(() => {
            console.log('save data to cloud when person changed');
        }, 1000);
    }, [props.persons]);

    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.RedButton
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }


    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                className={btnClass}
                onClick={props.clicked}
                ref={toggleBtnRef}>
                {props.showPersons ? 'Hide Persons' : 'Show Persons'}
            </button>
            <button
                onClick ={props.login}>
                Login
            </button>
        </div>
    );
}

export default React.memo(cockpit);