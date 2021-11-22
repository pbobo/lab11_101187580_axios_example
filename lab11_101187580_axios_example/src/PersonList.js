import React, { Component } from 'react'
import axios from 'axios'

export default class PersonList extends Component {

    //Define state default values
    state = {
        persons: []
    }

     //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/users`)
        .then(res => {
            console.log(res);
            this.setState({persons : res.data})
        })
    }


    render() {
        return (
            <ul>
                {this.state.persons.map(person =><li>{person.name}</li>)}
            </ul>
        )
    }
}
