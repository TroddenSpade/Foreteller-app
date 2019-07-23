import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise'

import Reducers from './reducers';

const Store = createStore(
    Reducers,
    applyMiddleware(thunk,promise)
);
export default Store;