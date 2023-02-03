import './bookList.scss';

import React, { Component } from 'react';
import {connect} from 'react-redux';
import BookListItem from '../book-list-item/';
import {withBookstoreService} from '../hoc';
import {booksLoaded, booksRequested} from '../../actions';
import { bindActionCreators } from 'redux';
import { compose } from '../../utils';
import Spinner from '../spinner'

class BookList extends Component {

  componentDidMount() {
    //1. recieve data
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    booksRequested();
    bookstoreService.getBooks()
    .then(data => booksLoaded(data));
  }

  render() {
    const {books, loading} = this.props;
    if(loading) {
      return <Spinner/>
    }
    return (
      <ul className='book-list'>
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book}/></li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({books, loading}) => ({books, loading});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    booksLoaded,
    booksRequested
  }, dispatch);
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps))(BookList);

