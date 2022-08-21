import {ActionTypes} from '../constants';
import {IAplicationState, Payload, ListItems} from './type';

const AplicationState = {
  loading: false,
  items: [],
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
    case ActionTypes.GET_ITEMS: {
      return {
        ...state,
        items: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
