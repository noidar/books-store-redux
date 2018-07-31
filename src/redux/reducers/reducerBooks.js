import random from '../../utils/random'

const defaultBooksList = [
	{title: 'You dont know Js', completed: false, id: random()},
	{title: 'I way to remember', completed: true, id: random()},
	{title: 'Five ways to Mars', completed: false, id: random()},
]

const booksState = (state = defaultBooksList, action) => {
	switch(action.type) {
		case 'TOGGLE_READ':
			return state.map( book => ( (action.id === book.id) ? ({...book, completed: !book.completed} ) : book) );

		case 'DELETE_BOOK':
		return state.reduce( (booksReducer, book) => {
			if (action.id === book.id) {
			} else {
				booksReducer.push(book)
			}

			return booksReducer;
		},[]);

		case 'ADD_NEW_BOOK':

		console.log(action)

		state = [...state, {title: action.title, completed: false, id: random()} ]
		return state

		default:
			return state
	}
}

export default booksState;