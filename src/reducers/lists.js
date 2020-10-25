const { REQUEST_LISTS_REQUEST, REQUEST_LISTS_FAILURE, REQUEST_LISTS_SUCCESS } = require("./actions")
const lists = (state = {
    isFetching: false,
    items:[]
}, action) => {
    switch (action.type) {
        case REQUEST_LISTS_REQUEST:
            return {...state, isFetching: true}
        case REQUEST_LISTS_FAILURE:
            return {...state, isFetching: false}
            case REQUEST_LISTS_SUCCESS:
                return {...state, isFetching: false, items: action.payload.data}
        default:
          return state
      }
}

export default lists;