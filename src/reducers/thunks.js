import axios from 'axios';
import {
  addCardFailure,
  addCardRequest,
  addCardSuccess,
  addListFailure,
  addListRequest,
  addListSuccess,
  deleteCardFailure,
  deleteCardRequest,
  deleteCardSuccess,
  deleteListFailure,
  deleteListRequest,
  deleteListSuccess,
  editCardFailure,
  editCardRequest,
  editCardSuccess,
  requestLabels,
  requestLabelsFailure,
  requestLabelsSuccess,
  requestLists,
  requestListsFailure,
  requestListsSuccess,
  deleteLabelRequest,
  deleteLabelSuccess,
  deleteLabelFailure,
  addLabelRequest,
  addLabelSuccess,
  addLabelFailure
} from './actions';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

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

export function editCard({ listId, cardId, changes }) {
  return (dispatch) => {
    dispatch(editCardRequest());
    return axios
      .patch(`/list/${listId}/card/${cardId}`, changes)
      .then(({ data }) => dispatch(editCardSuccess({ listId, card: data })))
      .catch((error) => {
        console.log(error);
        dispatch(editCardFailure(error));
      });
  };
}

export function deleteCard({ listId, cardId }) {
  return (dispatch) => {
    dispatch(deleteCardRequest());
    return axios
      .delete(`/list/${listId}/card/${cardId}`)
      .then(() => dispatch(deleteCardSuccess({ listId, cardId })))
      .catch((error) => {
        console.log(error);
        dispatch(deleteCardFailure(error));
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

export function deleteLabel(labelId) {
  return (dispatch) => {
    dispatch(deleteLabelRequest());
    return axios
      .delete(`/label/${labelId}`)
      .then(({ data }) => dispatch(addLabelSuccess(data)))
      .catch((error) => {
        console.log(error);
        dispatch(addLabelFailure(error));
      });
  };
}

export function addlabel(label) {
  return (dispatch) => {
    dispatch(addLabelRequest());
    return axios
      .post(`/label/`)
      .then(() => dispatch(addLabelSuccess()))
      .catch((error) => {
        console.log(error);
        dispatch(addLabelFailure(error));
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
