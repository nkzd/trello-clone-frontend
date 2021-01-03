import { move, reorder } from '../util/dnd';

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

      const sourceListIndex = state.items.findIndex(
        (list) => list._id === sInd
      );
      const destinationListIndex = state.items.findIndex(
        (list) => list._id === dInd
      );

      const listsCopy = [...state.items];
      if (sInd === dInd) {
        const reorderedCards = reorder(
          listsCopy[sourceListIndex].cards,
          source.index,
          destination.index
        );

        listsCopy[sourceListIndex].cards = reorderedCards;

        return { ...state, items: listsCopy };
      } else {
        const result = move(
          listsCopy[sourceListIndex].cards,
          listsCopy[destinationListIndex].cards,
          source,
          destination
        );

        listsCopy[sourceListIndex].cards = result[sInd];
        listsCopy[destinationListIndex].cards = result[dInd];

        return { ...state, items: listsCopy };
      }
    default:
      return state;
  }
};

export default lists;
