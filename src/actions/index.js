import { BOOKS_LOADED, BOOKS_REQUESTED, BOOKS_ERROR, BOOK_ADDED_TO_CART } from "../reducers/actionTypes";

export const booksLoaded = (newBooks) => {
  return {
    type: BOOKS_LOADED,
    payload: newBooks
  };
};

export const booksRequested = () => {
  return{
    type: BOOKS_REQUESTED
  }
}

export const booksError = (error)=> {
  return {
    type: BOOKS_ERROR,
    payload: error,
  }
}

export const bookAddedToCart = (bookId) => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: bookId
  }
}

export const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
  .then(data => dispatch(booksLoaded(data)))
  .catch(err=> dispatch(booksError(err)));
}

