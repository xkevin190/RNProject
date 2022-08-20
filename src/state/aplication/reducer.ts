import {ActionTypes} from '../constants';
import {IAplicationState, Payload } from './type'

const AplicationState = {
  loading: false,
};

export const AplicationReducer = (
  state: IAplicationState = AplicationState,
  action: Payload,
) => {
  switch (action.type) {
    case ActionTypes.LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
