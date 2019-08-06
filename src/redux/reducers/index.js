import { combineReducers } from 'redux';

import Login from './Login';
import Poll from './Poll';

const mainReducer = combineReducers({
    Login,
    Poll,
})

export default mainReducer;