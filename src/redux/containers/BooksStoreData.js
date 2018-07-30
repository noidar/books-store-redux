import React from 'react';
import BookList from '../../components/BookList';
import { toggleRead } from '../actions'
import { connect } from 'react-redux';

const BooksStoreData = ({books, onClick}) => {
	return <BookList props = {{books, onClick}}/>
}

const mapStateToProps = (state) => ({ books: state.booksState})

const mapDispatchToProps = (dispatch) => ({

	onClick: (id) => dispatch(toggleRead(id))
  })

export default connect(mapStateToProps, mapDispatchToProps)(BooksStoreData)