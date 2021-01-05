import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const REQUEST_LISTS_REQUEST = 'REQUEST_LISTS_REQUEST';
export const requestLists = () => {
  return {
    type: REQUEST_LISTS_REQUEST,
  };
};

export const REQUEST_LISTS_FAILURE = 'REQUEST_LISTS_FAILURE';
export const requestListsFailure = (error) => {
  return {
    type: REQUEST_LISTS_FAILURE,
    error,
  };
};

export const REQUEST_LISTS_SUCCESS = 'REQUEST_LISTS_SUCCESS';
export const requestListsSuccess = (payload) => {
  return {
    type: REQUEST_LISTS_SUCCESS,
    payload,
  };
};

export const ADD_CARD_REQUEST = 'ADD_CARD_REQUEST';
export const addCardRequest = () => {
  return {
    type: ADD_CARD_REQUEST,
  };
};

export const ADD_CARD_FAILURE = 'ADD_CARD_FAILURE';
export const addCardFailure = (error) => {
  return {
    type: ADD_CARD_FAILURE,
    error,
  };
};

export const ADD_CARD_SUCCESS = 'ADD_CARD_SUCCESS';
export const addCardSuccess = (payload) => {
  return {
    type: ADD_CARD_SUCCESS,
    payload,
  };
};

export const REORDER_CARDS = 'REORDER_CARDS';
export const reorderCards = (payload) => {
  return {
    type: REORDER_CARDS,
    payload,
  };
};

export function addCard({ listId, name }) {
  return (dispatch) => {
    dispatch(addCardRequest());
    const card = { name: name };
    return axios
      .post(`/list/${listId}/card`, card)
      .then(({data}) => dispatch(addCardSuccess({ listId, card: data })))
      .catch((error) => {
        console.log(error)
        dispatch(addCardFailure(error));
      });
  };
}

export function fetchPosts() {
  return function (dispatch) {
    dispatch(requestLists());

    return axios
      .get(`/list`)
      .then((response) => dispatch(requestListsSuccess(response)))
      .catch((error) => dispatch(requestListsFailure(error)));
  };
}
