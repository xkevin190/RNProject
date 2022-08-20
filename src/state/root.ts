import {combineReducers} from 'redux';
import {AplicationReducer} from './aplication/reducer';
import {IAplicationState} from './aplication/type';

export interface IState {
  aplication: IAplicationState;
}

export const rootReducer = combineReducers({
  aplication: AplicationReducer,
});
