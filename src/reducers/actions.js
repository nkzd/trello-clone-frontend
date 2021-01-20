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

export const REQUEST_LABELS_REQUEST = 'REQUEST_LABELS_REQUEST';
export const requestLabels = () => {
  return {
    type: REQUEST_LABELS_REQUEST,
  };
};

export const REQUEST_LABELS_FAILURE = 'REQUEST_LABELS_FAILURE';
export const requestLabelsFailure = (error) => {
  return {
    type: REQUEST_LABELS_FAILURE,
    error,
  };
};

export const REQUEST_LABELS_SUCCESS = 'REQUEST_LABELS_SUCCESS';
export const requestLabelsSuccess = (payload) => {
  return {
    type: REQUEST_LABELS_SUCCESS,
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

export const ADD_LIST_REQUEST = 'ADD_LIST_REQUEST';
export const addListRequest = () => {
  return {
    type: ADD_LIST_REQUEST,
  };
};

export const ADD_LIST_FAILURE = 'ADD_LIST_FAILURE';
export const addListFailure = (error) => {
  return {
    type: ADD_LIST_FAILURE,
    error,
  };
};

export const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS';
export const addListSuccess = (payload) => {
  return {
    type: ADD_LIST_SUCCESS,
    payload,
  };
};

export const DELETE_LIST_REQUEST = 'DELETE_LIST_REQUEST';
export const deleteListRequest = () => {
  return {
    type: DELETE_LIST_REQUEST,
  };
};

export const DELETE_LIST_FAILURE = 'DELETE_LIST_FAILURE';
export const deleteListFailure = (error) => {
  return {
    type: DELETE_LIST_FAILURE,
    error,
  };
};

export const DELETE_LIST_SUCCESS = 'DELETE_LIST_SUCCESS';
export const deleteListSuccess = (payload) => {
  return {
    type: DELETE_LIST_SUCCESS,
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
      .then(({ data }) => dispatch(addCardSuccess({ listId, card: data })))
      .catch((error) => {
        console.log(error);
        dispatch(addCardFailure(error));
      });
  };
}

export function addList(name) {
  return (dispatch) => {
    dispatch(addListRequest());
    const list = { name: name };
    return axios
      .post(`/list/`, list)
      .then(({ data }) => dispatch(addListSuccess(data)))
      .catch((error) => {
        console.log(error);
        dispatch(addListFailure(error));
      });
  };
}

export function deleteList(listId) {
  return (dispatch) => {
    dispatch(deleteListRequest());
    return axios
      .delete(`/list/${listId}`)
      .then(() => dispatch(deleteListSuccess(listId)))
      .catch((error) => {
        console.log(error);
        dispatch(deleteListFailure(error));
      });
  };
}

export function fetchLists() {
  return function (dispatch) {
    dispatch(requestLists());

    return axios
      .get(`/list`)
      .then((response) => dispatch(requestListsSuccess(response)))
      .catch((error) => dispatch(requestListsFailure(error)));
  };
}

export function fetchLabels() {
  return function (dispatch) {
    dispatch(requestLabels());

    return axios
      .get(`/label`)
      .then((response) => dispatch(requestLabelsSuccess(response)))
      .catch((error) => dispatch(requestLabelsFailure(error)));
  };
}
