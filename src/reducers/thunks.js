import axios from 'axios';
import { cloneDeep } from 'lodash';
import { toast } from 'react-toastify';
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
  createLabelRequest,
  createLabelSuccess,
  createLabelFailure,
  reorderCardsRequest,
  reorderCardsSuccess,
  reorderCardsFailure,
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
      .then(() => dispatch(deleteLabelSuccess(labelId)))
      .catch((error) => {
        console.log(error);
        dispatch(deleteLabelFailure(error));
      });
  };
}

export function createLabel(label) {
  return (dispatch) => {
    dispatch(createLabelRequest());
    return axios
      .post(`/label/`, label)
      .then(({ data }) => dispatch(createLabelSuccess(data)))
      .catch((error) => {
        console.log(error);
        dispatch(createLabelFailure(error));
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

export function reorderCards({ source, destination }) {
  if (!destination || !source) {
    return { type: 'REORDER_NOP' };
  }

  const { droppableId: sourceId, index: sourceIndex } = source;
  const { droppableId: destinationId, index: destinationIndex } = destination;
  const change = {
    sourceId,
    destinationId,
    sourceIndex,
    destinationIndex,
  };
  return (dispatch, getState) => {
    const previousLists = cloneDeep(getState().lists.items);
    dispatch(reorderCardsRequest(change));
    return axios
      .post(`/list/reorderCards`, change)
      .then(() => dispatch(reorderCardsSuccess()))
      .catch((error) => {
        dispatch(reorderCardsFailure(previousLists));
      });
  };
}

const errorNotificaton = (error) => {
  toast.error(error, {
    position: 'bottom-left',
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

axios.interceptors.request.use(
  (config) => config,
  (error) => {
    errorNotificaton('Bad request');
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    errorNotificaton(error.response ? error.response.data.error : error.message);
    return Promise.reject(error);
  }
);
