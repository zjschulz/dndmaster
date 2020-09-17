import { combineReducers } from 'redux';
import campaigns from './campaignReducer';
import user from './authReducer';

export default combineReducers({
  campaigns,
  user
});