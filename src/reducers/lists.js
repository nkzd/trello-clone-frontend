import { reorder } from '../util/dnd';

const {
  REQUEST_LISTS_REQUEST,
  REQUEST_LISTS_FAILURE,
  REQUEST_LISTS_SUCCESS,
  REORDER_CARDS,
  MOVE_CARD,
} = require('./actions');

const lists = (
  state = {
    isFetching: false,
    items: [],
  },
  action
) => {
  switch (action.type) {
    case REQUEST_LISTS_REQUEST:
      return { ...state, isFetching: true };
    case REQUEST_LISTS_FAILURE:
      return { ...state, isFetching: false };
    case REQUEST_LISTS_SUCCESS:
      return { ...state, isFetching: false, items: action.payload.data };
    case REORDER_CARDS:
      const { source, destination } = action.payload;

      if (!destination) {
        return state;
      }
      const sInd = source.droppableId;
      const dInd = destination.droppableId;

      const sourceList = state.items.find((list) => list._id === sInd);
      const sourceListIndex = state.items.findIndex(
        (list) => list._id === sInd
      );

      const destinationList = state.items.find((list) => list._id === dInd);

      if (sInd === dInd) {
        const listsCopy = [...state.items];

        const reorderedCards = reorder(
          listsCopy[sourceListIndex].cards,
          source.index,
          destination.index
        );

        listsCopy[sourceListIndex].cards = reorderedCards;

        return { ...state, items: listsCopy };
      } else {
        // const result = move(state[sInd], state[dInd], source, destination);
        // const newState = [...state];
        // newState[sInd] = result[sInd];
        // newState[dInd] = result[dInd];
        return state;
        //TODO
        // setState(newState.filter((group) => group.length));
      }
    default:
      return state;
  }
};

export default lists;
