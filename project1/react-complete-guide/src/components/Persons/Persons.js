import React from 'react';
import Person from './Person/Person'

const persons = (props) => {
    return (
        props.persons.map((person, index) => {
            return(
                <Person
                name = {person.name}
                age = {person.age}
                key={person.id}
                click = {() => props.clicked(index)}
                //Keys make it more efficient so that the DOM
                //recognizes which element to update
                
                changed={props.changed.bind(this,person.id)} />
            );

        }
    ));
}

export default persons;