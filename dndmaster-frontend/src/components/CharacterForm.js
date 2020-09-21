import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCharacter } from '../actions/actions';

class CharacterForm extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            user_id: this.props.user.id,
            campaign_id: 1
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addCharacter(this.state, this.props.history);
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            <div id="characterform" style={{marginLeft: '20px'}}>
                <h2>New Character Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="name"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required></input>         
                    <button type="submit">Submit New Character</button>
                </form>
                <p></p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {characters: state.characters, loggedInStatus: state.user.loggedInStatus, user: state.user.user}
  }

const mapDispatchToProps = (dispatch) => {
    return {
        addCharacter: (formData, history) => dispatch(addCharacter(formData, history)),
    }
}  

export default connect(mapStateToProps, mapDispatchToProps)(CharacterForm)