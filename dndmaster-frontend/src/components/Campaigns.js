import React from 'react';
import { connect } from 'react-redux';
import { fetchCampaigns } from '../actions/actions';
import Campaign from './Campaign';

class Campaigns extends React.Component {

    componentDidMount() {
        this.props.fetchCampaigns()
    };

    generateTeams = () => {
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
          
        return this.props.campaigns.filter(campaign => campaign.user_id === this.props.user.id).sort(compare).map((campaign, index) => <Campaign
          key = {index}
          name = {campaign.name}
          />)
    };

    render() {    
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>Campaign Name</th>
                    </tr>
                        {this.generateTeams()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {campaigns: state.campaigns, user: state.user.user}
}

export default connect(mapStateToProps, { fetchCampaigns })(Campaigns)