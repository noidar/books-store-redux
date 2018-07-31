import React from 'react';
import BookList from '../../components/BookList';
import { toggleRead } from '../actions';
import { deleteBook } from '../actions';
import { connect } from 'react-redux';

// send thrue props callback actions
const BooksStoreData = ({books, onClick, deleteBook}) => {
	return <BookList props = {{books, onClick, deleteBook}}/>
}

// tie state app to props, send only obj that we are interested
const mapStateToProps = (state) => ({ books: state.booksState})

const mapDispatchToProps = (dispatch) => ({
	onClick: (id) => dispatch(toggleRead(id)),
	deleteBook: (id) => dispatch(deleteBook(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksStoreData)