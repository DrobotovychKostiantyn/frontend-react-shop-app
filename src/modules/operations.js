import axios from 'axios';
import * as actions from './actions';

// for Home

export const fetchProductSuccess = () => async dispatch => {
  dispatch(actions.fetchProductsRequest());

  try {
    const response = await axios.get('http://localhost:3001/products');
    dispatch(actions.fetchProductsSuccess(response.data));
    // console.log(response.data);
  } catch (error) {
    dispatch(actions.fetchProductsError);
  }
};

export const fetchManProducts = () => null;
