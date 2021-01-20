import {
  REQUEST_LABELS_FAILURE,
  REQUEST_LABELS_REQUEST,
  REQUEST_LABELS_SUCCESS,
} from './actions';

const labels = (
  state = {
    isFetching: false,
    items: [],
  },
  action
) => {
  switch (action.type) {
    case REQUEST_LABELS_REQUEST:
      return { ...state, isFetching: true };
    case REQUEST_LABELS_FAILURE:
      return { ...state, isFetching: false };
    case REQUEST_LABELS_SUCCESS:
      return { ...state, isFetching: false, items: action.payload.data };
    default:
      return state;
  }
};

export default labels;
