import {
  CREATE_LABEL_FAILURE,
  CREATE_LABEL_REQUEST,
  CREATE_LABEL_SUCCESS,
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
    case CREATE_LABEL_REQUEST:
      return { ...state, isFetching: true };
    case CREATE_LABEL_FAILURE:
      return { ...state, isFetching: false };
    case CREATE_LABEL_SUCCESS: {
      debugger;
      const newLabel = action.payload;
      const labelsCopy = [...state.items];
      labelsCopy.push(newLabel);
      return { ...state, isFetching: false, items: labelsCopy };
    }
    default:
      return state;
  }
};

export default labels;
