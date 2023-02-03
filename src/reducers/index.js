import { BOOKS_LOADED, BOOKS_REQUESTED } from "./actionTypes";

const initialState = {
  books: [],
  loading: true,
}

const reducer = (state = initialState, action) =>{
  switch(action.type) {
    case BOOKS_REQUESTED:
      return {
        ...state,
        books: [],
        loading: true
      }
    case BOOKS_LOADED:
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    default :
    return state;
  }
};

export default reducer;

