import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCampaign } from '../actions/actions';

class CampaignForm extends Component {
  
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            user_id: this.props.user.id
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addCampaign(this.state, this.props.history);
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            <div id="campaignform">
                <h1>New Campaign Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="name"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required></input>         
                    <button type="submit">Submit New Campaign</button>
                </form>
                <p></p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {campaigns: state.campaigns, loggedInStatus: state.user.loggedInStatus, user: state.user.user}
  }

const mapDispatchToProps = (dispatch) => {
    return {
        addCampaign: (formData, history) => dispatch(addCampaign(formData, history)),
    }
}  

export default connect(mapStateToProps, mapDispatchToProps)(CampaignForm)