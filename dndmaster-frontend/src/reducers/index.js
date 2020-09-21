import { combineReducers } from 'redux';
import campaigns from './campaignReducer';
import user from './authReducer';
import characters from './characterReducer';

export default combineReducers({
  campaigns,
  user,
  characters
});