import { BOOKS_LOADED } from "../reducers/actionTypes";

export const booksLoaded = (newBooks) => {
  return {
    type: BOOKS_LOADED,
    payload: newBooks
  };
};

