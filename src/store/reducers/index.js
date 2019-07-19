import { combineReducers } from 'redux';

import userAuth from './user';
import companies from './companies';
import userInfo from './userRegisterInformation';

export default combineReducers({
    companies,
    userAuth,
    userInfo,
});