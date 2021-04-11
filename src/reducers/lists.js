import { move, reorder } from '../util/dnd';

const {
  REQUEST_LISTS_REQUEST,
  REQUEST_LISTS_FAILURE,
  REQUEST_LISTS_SUCCESS,
  ADD_CARD_REQUEST,
  ADD_CARD_FAILURE,
  ADD_CARD_SUCCESS,
  EDIT_CARD_REQUEST,
  EDIT_CARD_FAILURE,
  EDIT_CARD_SUCCESS,
  ADD_LIST_SUCCESS,
  ADD_LIST_REQUEST,
  ADD_LIST_FAILURE,
  EDIT_LIST_SUCCESS,
  EDIT_LIST_REQUEST,
  EDIT_LIST_FAILURE,
  DELETE_LIST_REQUEST,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILURE,
  DELETE_CARD_REQUEST,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_FAILURE,
  DELETE_LABEL_REQUEST,
  DELETE_LABEL_SUCCESS,
  DELETE_LABEL_FAILURE,
  REORDER_CARDS_SUCCESS,
  REORDER_CARDS_FAILURE,
  REORDER_CARDS_REQUEST,
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

    case REORDER_CARDS_SUCCESS:
      return { ...state, isFetching: false };
    case REORDER_CARDS_FAILURE:
      return { ...state, isFetching: false, items: action.payload };
    case REORDER_CARDS_REQUEST: {
      const {
        sourceId,
        destinationId,
        sourceIndex,
        destinationIndex,
      } = action.payload;

      if (!destinationId) {
        return state;
      }

      const sourceListIndex = state.items.findIndex(
        (list) => list._id === sourceId
      );
      const destinationListIndex = state.items.findIndex(
        (list) => list._id === destinationId
      );

      const listsCopy = [...state.items];
      if (sourceId === destinationId) {
        const reorderedCards = reorder(
          listsCopy[sourceListIndex].cards,
          sourceIndex,
          destinationIndex
        );

        listsCopy[sourceListIndex].cards = reorderedCards;
        return { ...state, items: listsCopy };
      } else {
        const result = move(
          listsCopy[sourceListIndex].cards,
          listsCopy[destinationListIndex].cards,
          { sourceId, sourceIndex },
          { destinationId, destinationIndex }
        );

        listsCopy[sourceListIndex].cards = result[sourceId];
        listsCopy[destinationListIndex].cards = result[destinationId];

        return { ...state, items: listsCopy, isFetching: true };
      }
    }

    case ADD_CARD_REQUEST:
      return { ...state, isFetching: true };
    case ADD_CARD_SUCCESS: {
      const { listId, card } = action.payload;
      const listsCopy = [...state.items];
      const listIndex = state.items.findIndex((list) => list._id === listId);
      listsCopy[listIndex].cards = [...listsCopy[listIndex].cards, card];
      return { ...state, isFetching: false, items: listsCopy };
    }
    case ADD_CARD_FAILURE:
      return { ...state, isFetching: false };

    case EDIT_CARD_REQUEST:
      return { ...state, isFetching: true };
    case EDIT_CARD_SUCCESS: {
      const { listId, card } = action.payload;
      const listsCopy = [...state.items];
      const listIndex = state.items.findIndex((list) => list._id === listId);
      const cardIndex = listsCopy[listIndex].cards.findIndex(
        (aCard) => aCard._id === card._id
      );
      listsCopy[listIndex].cards[cardIndex] = card;
      return { ...state, isFetching: false, items: listsCopy };
    }
    case EDIT_CARD_FAILURE:
      return { ...state, isFetching: false };

    case ADD_LIST_REQUEST:
      return { ...state, isFetching: true };
    case ADD_LIST_SUCCESS: {
      const list = action.payload;
      return { ...state, isFetching: false, items: [...state.items, list] };
    }
    case ADD_LIST_FAILURE:
      return { ...state, isFetching: false };

    case EDIT_LIST_REQUEST:
      return { ...state, isFetching: true };
    case EDIT_LIST_SUCCESS: {
      const newList = action.payload;
      const listsCopy = [...state.items];
      const listIndex = state.items.findIndex((list) => list._id === newList._id);
      listsCopy[listIndex] = newList;
      return { ...state, isFetching: false, items: listsCopy };
    }
    case EDIT_LIST_FAILURE:
      return { ...state, isFetching: false };

    case DELETE_LIST_REQUEST:
      return { ...state, isFetching: true };
    case DELETE_LIST_SUCCESS: {
      const listId = action.payload;
      const listsCopy = [...state.items];
      return {
        ...state,
        isFetching: false,
        items: listsCopy.filter((list) => list._id !== listId),
      };
    }
    case DELETE_LIST_FAILURE:
      return { ...state, isFetching: false };

    case DELETE_CARD_REQUEST:
      return { ...state, isFetching: true };
    case DELETE_CARD_SUCCESS: {
      const { listId, cardId } = action.payload;

      const sourceListIndex = state.items.findIndex(
        (list) => list._id === listId
      );
      const listsCopy = [...state.items];
      const cardsCopy = listsCopy[sourceListIndex].cards.filter(
        (card) => card._id !== cardId
      );
      listsCopy[sourceListIndex].cards = cardsCopy;

      return {
        ...state,
        isFetching: false,
        items: listsCopy,
      };
    }
    case DELETE_CARD_FAILURE:
      return { ...state, isFetching: false };

    case DELETE_LABEL_REQUEST:
      return { ...state, isFetching: true };
    case DELETE_LABEL_FAILURE:
      return { ...state, isFetching: false };
    case DELETE_LABEL_SUCCESS: {
      const labelId = action.payload;
      const listsCopy = [...state.items];
      listsCopy.forEach((list) => {
        list.cards.forEach((card) => {
          const index = card.labels.indexOf(labelId);
          if (index !== -1) {
            card.labels.splice(index, 1);
          }
        });
      });
      return {
        ...state,
        isFetching: false,
        items: listsCopy,
      };
    }
    default:
      return {
        ...state
      };
  }
};

export default lists;
