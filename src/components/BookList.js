import React from 'react';

const BookList = ({ props }) => {
	const { books } = props;
	const booksList = books.map(book => (
		<li
			onClick = {() => props.onClick(book.id)}
			key = {book.id}
			style = {{textDecorationLine: (book.completed ? 'line-through' : '' )}}
			>
			{book.title}
		</li>)
	);
	console.log(props)

	return <ul> {booksList}</ul>
}

export default BookList;