import { BOOKS_REQUESTED, BOOKS_LOADED, BOOKS_ERROR } from "./actionTypes";

const updateBookList = (state, action)=>{
  if(state === undefined) {
    return {
        books: [],
        loading: true,
        error: null,
    }
  }
  switch(action.type) {
    case BOOKS_REQUESTED:
      return { //так как работаем с локальным стейтом то не пишем ...state
        books: [],
        loading: true,
        error: null,
      };
    case BOOKS_LOADED:
      return {
        books: action.payload,
        loading: false,
        error: null,
      };
    case BOOKS_ERROR:
      return {
        books: [],
        loading: false,
        error: action.payload,
      };
    default: 
      return state.bookList;
  }

}

export default updateBookList;