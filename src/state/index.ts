import {legacy_createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {rootReducer} from './root';

const middleWare = applyMiddleware(ReduxThunk)(legacy_createStore);

export default middleWare(rootReducer);
