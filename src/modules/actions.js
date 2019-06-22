import actionTypes from './actionTypes';

export const fetchProductsRequest = () => ({
  type: actionTypes.FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = data => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: {
    data,
  },
});

export const fetchProductsError = error => ({
  type: actionTypes.FETCH_PRODUCTS_ERROR,
  payload: {
    error,
  },
});
