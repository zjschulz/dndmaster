import React, { Component } from 'react';

export default class Character extends Component {

    render(){
        return(
            <ul>
                <li>{this.props.name}</li> 
            </ul>
        )
    }
   
}