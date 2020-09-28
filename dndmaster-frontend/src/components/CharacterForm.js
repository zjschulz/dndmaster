import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCharacter } from '../actions/actions';

class CharacterForm extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            race: "",
            character_class: "",
            background: "",
            level: "",
            armor_class: "",
            perception: "",
            investigation: "",
            insight: "",
            spell_save_dc: "",
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
                    <input
                    type="race"
                    name="race"
                    placeholder="Race"
                    value={this.state.race}
                    onChange={this.handleChange}
                    required></input> 
                    <input
                    type="character_class"
                    name="character_class"
                    placeholder="Class"
                    value={this.state.character_class}
                    onChange={this.handleChange}
                    required></input> 
                    <input
                    type="background"
                    name="background"
                    placeholder="Background"
                    value={this.state.background}
                    onChange={this.handleChange}
                    required></input> 
                    <input
                    type="level"
                    name="level"
                    placeholder="Level"
                    value={this.state.level}
                    onChange={this.handleChange}
                    required></input> 
                    <input
                    type="armor_class"
                    name="armor_class"
                    placeholder="AC"
                    value={this.state.armor_class}
                    onChange={this.handleChange}
                    required></input> 
                    <input
                    type="perception"
                    name="perception"
                    placeholder="Passive Perception"
                    value={this.state.perception}
                    onChange={this.handleChange}
                    required></input> 
                    <input
                    type="investigation"
                    name="investigation"
                    placeholder="Passive Investigation"
                    value={this.state.investigation}
                    onChange={this.handleChange}
                    required></input> 
                    <input
                    type="insight"
                    name="insight"
                    placeholder="Passive Insight"
                    value={this.state.insight}
                    onChange={this.handleChange}
                    required></input> 
                    <input
                    type="spell_save_dc"
                    name="spell_save_dc"
                    placeholder="Spell Save DC"
                    value={this.state.spell_save_dc}
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