import React, { Component } from 'react';

export default class Campaign extends Component {
    
    render(){
        return(
            <tr>
                <td>{this.props.name}</td> 
            </tr>
        )
    }
   

   
}