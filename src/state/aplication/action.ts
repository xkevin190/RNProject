import {APIService} from '../../services/ApiService';
import {ActionTypes} from '../constants';

export const getImages = () => async (dispatch: any) => {
  const result = await APIService();

  if (result.status === 200) {
    dispatch({
      type: ActionTypes.GET_ITEMS,
      payload: result.data.results,
    });
  }
};
