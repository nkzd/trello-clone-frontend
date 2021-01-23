import {
  CREATE_LABEL_FAILURE,
  CREATE_LABEL_REQUEST,
  CREATE_LABEL_SUCCESS,
  DELETE_LABEL_FAILURE,
  DELETE_LABEL_REQUEST,
  DELETE_LABEL_SUCCESS,
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
      const newLabel = action.payload;
      const labelsCopy = [...state.items];
      labelsCopy.push(newLabel);
      return { ...state, isFetching: false, items: labelsCopy };
    }
    case DELETE_LABEL_REQUEST:
      return { ...state, isFetching: true };
    case DELETE_LABEL_FAILURE:
      return { ...state, isFetching: false };
    case DELETE_LABEL_SUCCESS: {
      const labelId = action.payload;
      return {
        ...state,
        isFetching: false,
        items: state.items.filter((label) => label._id !== labelId),
      };
    }

    default:
      return state;
  }
};

export default labels;
