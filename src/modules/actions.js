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

// for man page

export const fetchManProductsRequest = () => ({
  type: actionTypes.FETCH_MAN_PRODUCTS_REQUEST,
});

export const fetchManProductsSuccess = data => ({
  type: actionTypes.FETCH_MAN_PRODUCTS_SUCCESS,
  payload: {
    data,
  },
});

export const fetchManProductsError = error => ({
  type: actionTypes.FETCH_MAN_PRODUCTS_ERROR,
  payload: {
    error,
  },
});

// for women page

export const fetchWomenProductsRequest = () => ({
  type: actionTypes.FETCH_WOMEN_PRODUCTS_REQUEST,
});

export const fetchWomenProductsSuccess = data => ({
  type: actionTypes.FETCH_WOMEN_PRODUCTS_SUCCESS,
  payload: {
    data,
  },
});

export const fetchWomenProductsError = error => ({
  type: actionTypes.FETCH_WOMEN_PRODUCTS_ERROR,
  payload: {
    error,
  },
});

// for accessories

export const fetchAccessoriesProductsRequest = () => ({
  type: actionTypes.FETCH_ACCESSORIES_PRODUCTS_REQUEST,
});

export const fetchAccessoriesProductsSuccess = data => ({
  type: actionTypes.FETCH_ACCESSORIES_PRODUCTS_SUCCESS,
  payload: {
    data,
  },
});

export const fetchAccessoriesProductsError = error => ({
  type: actionTypes.FETCH_ACCESSORIES_PRODUCTS_ERROR,
  payload: {
    error,
  },
});
