import { BOOKS_LOADED, BOOKS_REQUESTED, BOOKS_ERROR, BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART, ALL_BOOK_REMOVED_FROM_CART } from "../reducers/actionTypes";

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

export const bookRemoveFromCart = (bookId) => {
  return {
    type: BOOK_REMOVED_FROM_CART,
    payload: bookId
  }
}

export const allBookRemoveFromCart = (bookId) => {
  return {
    type: ALL_BOOK_REMOVED_FROM_CART,
    payload: bookId
  }
}

export const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
  .then(data => dispatch(booksLoaded(data)))
  .catch(err=> dispatch(booksError(err)));
}

