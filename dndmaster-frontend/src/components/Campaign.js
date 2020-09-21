import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions/actions';
import Character from './Character';

class Campaign extends Component {

    componentDidMount() {
        this.props.fetchCharacters()
    };

    generateCharacters = () => {
        function compare(a, b) {
            const totalpointsA = a.tp;
            const totalpointsB = b.tp;
          
            let comparison = 0;
            if (totalpointsA > totalpointsB) {
              comparison = 1;
            } else if (totalpointsA < totalpointsB) {
              comparison = -1;
            }
            return comparison * -1;
          };
          
        return this.props.characters.filter(character => character.campaign_id === this.props.campaigns.id).sort(compare).map((character, index) => <Character
          key = {index}
          name = {character.name}
          id = {character.id}
          />)
    };

    render(){
        return(
            <tr>
                <td>{this.props.name}<p>{this.generateCharacters()}</p></td> 

            </tr>
        )
    }
   
}

const mapStateToProps = state => {
    return {characters: state.characters ,campaigns: state.campaigns, user: state.user.user}
}

export default connect(mapStateToProps, { fetchCharacters })(Campaign)