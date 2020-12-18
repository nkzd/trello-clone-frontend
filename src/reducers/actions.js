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

export function fetchPosts() {
  return function (dispatch) {
    dispatch(requestLists());

    return axios
      .get(`/list`)
      .then((response) => dispatch(requestListsSuccess(response)))
      .catch((error) => dispatch(requestListsFailure(error)));
  };
}
