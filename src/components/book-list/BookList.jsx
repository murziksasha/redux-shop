import './bookList.scss';

import React, { Component } from 'react';
import {connect} from 'react-redux';
import BookListItem from '../book-list-item/';
import {withBookstoreService} from '../hoc';
import {booksLoaded} from '../../actions';
import { bindActionCreators } from 'redux';
import { compose } from '../../utils';

class BookList extends Component {

  componentDidMount() {
    //1. recieve data
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    console.log(data);

    //2. dispatch action to store
    this.props.booksLoaded(data);
  }

  render() {
    const {books} = this.props;
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

const mapStateToProps = ({books}) => ({books});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    booksLoaded
  }, dispatch);
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps))(BookList);

