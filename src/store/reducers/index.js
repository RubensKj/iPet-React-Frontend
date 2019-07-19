import { combineReducers } from 'redux';

import user from './user';
import companies from './companies';
import userInfo from './userRegisterInformation';

export default combineReducers({
    companies,
    user,
    userInfo,
});